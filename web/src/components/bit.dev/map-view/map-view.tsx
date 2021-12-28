import classNames from 'classnames'
import React, { useCallback, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { MAX_ZOOM, RADIUS, darkStyle } from './utils/presets'
import { preparePOIClusters, TPoiInputData } from './utils'
import useSupercluster from 'use-supercluster'
import { PointMarker, ClusterMarker } from './components'
import { omit } from 'lodash'

export type MapViewProps = {
  apiKey: string
  className?: string
  mapProps?: Record<string, unknown>
  data?: TPoiInputData[]
  onMapReady?: (payload: unknown) => void
  children?: (payload?: Record<string, unknown>) => React.ReactElement
}

export function MapView({
  apiKey,
  className,
  mapProps,
  data,
  onMapReady,
  children,
}: MapViewProps) {
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null)
  const [zoom, setZoom] = useState(null)
  const onChange = useCallback(({ zoom, bounds }) => {
    setZoom(zoom)
    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat])
  }, [])

  const points = preparePOIClusters(data as TPoiInputData[])
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: RADIUS, maxZoom: MAX_ZOOM },
  })

  const handleClusterClick = (cluster, lat, lng, mapRef) => () => {
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(cluster.id),
      20
    )
    mapRef.current.setZoom(expansionZoom)
    mapRef.current.panTo({ lat, lng })
  }

  return (
    <div
      className={classNames(
        'w-full h-full absolute  bottom-0 right-0 ',
        className
      )}
    >
      <GoogleMapReact
        onChange={onChange}
        bootstrapURLKeys={{
          key: apiKey,
          libraries: ['places'],
          version: 'weekly',
        }}
        defaultCenter={mapProps?.center}
        defaultZoom={mapProps?.zoom}
        options={{ styles: darkStyle }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map
          onMapReady && onMapReady(map)
        }}
      >
        {clusters?.length &&
          clusters.map((cluster, indx) => {
            const [lng, lat] = cluster.geometry.coordinates
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties
            const data = omit(cluster.properties, ['cluster'])

            return isCluster ? (
              <ClusterMarker
                key={`cluster-${cluster.id}`}
                pointCount={pointCount}
                points={points}
                onClick={handleClusterClick(cluster, lat, lng, mapRef)}
              />
            ) : (
              <PointMarker key={indx} lng={lng} lat={lat}>
                {({ close, open }) =>
                  children && children({ data, close, open })
                }
              </PointMarker>
            )
          })}
      </GoogleMapReact>
    </div>
  )
}

MapView.defaultProps = {
  mapProps: {
    center: {
      lat: 15.5,
      lng: -98.35,
    },
    zoom: 0,
  },
}

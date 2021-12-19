/* eslint-disable react-hooks/exhaustive-deps */
import { MapView as MapViewComponent } from 'src/components/bit.dev/map-view'
import { useQuery, CellSuccessProps } from '@redwoodjs/web'
import type { HubsQuery } from 'types/graphql'
import { toast } from '@redwoodjs/web/toast'
import { useEffect, useRef, useState } from 'react'
import { PopUpDetail } from './components/pop-up-detail'
import { pick } from 'lodash'
import { HUBS_QUERY } from 'src/utils/graphql/queries/hubs'
import { useStore } from 'src/utils/stores/viewHubsStore'

/* todo: import data from db with graphql filter  with store state  */

let toastId

const MapView = () => {
  const [_data, setData] = useState([])
  const selectedContinent = useStore((store) => store.selectedContinent)
  const mapRef = useRef()
  const { loading, data, refetch } =
    useQuery<CellSuccessProps<HubsQuery>>(HUBS_QUERY)
  useEffect(() => {
    if (loading) {
      toastId = toast.loading('Loading Data')
    } else {
      toast.dismiss(toastId)
      setData(data?.hubs || [])
      const { lat, lng } = pick(data?.hubs[0]?.location, ['lat', 'lng'])
      if (mapRef && mapRef.current && lat && lng) {
        mapRef.current.panTo({ lat, lng })
      }
    }
    return () => {
      toastId && toast.dismiss(toastId)
    }
  }, [loading])

  useEffect(() => {
    refetch({ filter: selectedContinent })
  }, [selectedContinent])

  const _onMapReady = (map) => {
    mapRef.current = map
  }

  return (
    <MapViewComponent
      onMapReady={_onMapReady}
      data={_data}
      apiKey={process.env.G_PLACES_API_KEY}
    >
      {({
        data,
        open,
        close,
      }: {
        data?: { name: string; country: string; images: { dataURL: string }[] }
        close?: () => void
        open: boolean
      }) => <PopUpDetail data={data} close={close} open={open} />}
    </MapViewComponent>
  )
}

export default MapView

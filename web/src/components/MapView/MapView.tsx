/* eslint-disable react-hooks/exhaustive-deps */
import { MapView as MapViewComponent } from 'src/components/bit.dev/map-view'
import { useQuery, CellSuccessProps } from '@redwoodjs/web'
import type { HubsQuery } from 'types/graphql'
import { toast } from '@redwoodjs/web/toast'
import { useEffect, useState } from 'react'
import { PopUpDetail } from './components/pop-up-detail'

/* todo: import data from db with graphql filter  with store state  */
const QUERY = gql`
  query HubsQuery {
    hubs {
      id
      location
      name
      images
      createdAt
    }
  }
`
let toastId

const MapView = () => {
  const [_data, setData] = useState([])
  const { loading, data } = useQuery<CellSuccessProps<HubsQuery>>(QUERY)
  useEffect(() => {
    if (loading) {
      toastId = toast.loading('Loading Data')
    } else {
      toast.dismiss(toastId)
      setData(data.hubs)
    }
    return () => {
      toastId && toast.dismiss(toastId)
    }
  }, [loading])

  return (
    <MapViewComponent data={_data} apiKey={process.env.G_PLACES_API_KEY}>
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

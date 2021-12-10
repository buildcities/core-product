import { omit } from 'lodash'

export type TPoiInputData = {
  location: { lat: number; lng: number; continent: string; country: string }
  name: string
  images?: { dataURL: string }[]
}

export type TPointReturnValue = {
  type: 'Feature'
  properties: Record<string, unknown>
  geometry: {
    type: 'Point'
    coordinates: number[]
  }
}

export const preparePOIClusters = (
  data?: TPoiInputData[]
): TPointReturnValue[] =>
  data?.length &&
  data.map((item) => ({
    type: 'Feature',
    properties: { cluster: false, ...omit(item.location, ['lat', 'lng']) },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(item.location.lng.toString()),
        parseFloat(item.location.lat.toString()),
      ],
    },
  }))

export const getClusterSize = (
  pointCount: number,
  points: Record<string, unknown>[],
  factor = 20,
  baseMultiple = 30
) => {
  return factor + (pointCount / points.length) * baseMultiple
}

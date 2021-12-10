import React from 'react'
import { getClusterSize, TPointReturnValue } from '../utils'

type MarkerProps = {
  onClick?: () => void
  lng?: number
  lat?: number
}

interface ClusterMarkerProps extends MarkerProps {
  pointCount: number
  points: TPointReturnValue[]
}

export const ClusterMarker = ({
  pointCount,
  points,
  onClick,
}: ClusterMarkerProps) => {
  const size = getClusterSize(pointCount, points)
  return (
    <div className="relative group">
      <div
        style={{
          width: size,
          height: size,
        }}
        className="absolute opacity-75 group-hover:bg-selected group-hover:opacity-100
          blur rounded-full bg-blue-500"
      ></div>
      <button
        style={{
          width: size,
          height: size,
        }}
        onClick={onClick}
        className="p-1 relative rounded-full text-xs font-bold text-mainText group-hover:bg-selected bg-normal"
      >
        <div className="bg-cardBackground h-full justify-center flex items-center rounded-full">
          {pointCount}
        </div>
      </button>
    </div>
  )
}

export const PointMarker: React.FC<MarkerProps> = () => {
  return (
    <div className="relative group">
      <div
        className="absolute opacity-75
       blur rounded-full w-5 h-5 bg-blue-500 group-hover:bg-selected"
      ></div>
      <button className="p-1 relative rounded-full w-5 h-5 bg-normal group-hover:bg-selected">
        <div className="bg-white group-hover:bg-[#AE9EFF] h-full justify-center flex items-center rounded-full" />
      </button>
    </div>
  )
}

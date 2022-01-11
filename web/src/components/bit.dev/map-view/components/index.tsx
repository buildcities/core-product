import { Popover } from '@headlessui/react'
import classnames from 'classnames'
import React from 'react'
import { getClusterSize, TPointReturnValue } from '../utils'

type MarkerProps = {
  onClick?: () => void
  lng?: number
  lat?: number
  children?: ({
    close,
    open,
  }: {
    close?: () => void
    open?: boolean
  }) => React.ReactElement
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
          blur rounded-full bg-notSelected"
      ></div>
      <button
        style={{
          width: size,
          height: size,
        }}
        onClick={onClick}
        className="p-1 relative rounded-full text-xs font-bold text-mainText group-hover:bg-selected bg-notSelected"
      >
        <div className="bg-white h-full justify-center flex items-center rounded-full">
          {pointCount}
        </div>
      </button>
    </div>
  )
}

export const PointMarker: React.FC<MarkerProps> = ({ children }) => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative group">
          <div
            className={classnames(
              'absolute opacity-75 blur rounded-full w-5 h-5  group-hover:bg-selected',
              open ? 'bg-blue' : 'bg-blue'
            )}
          ></div>
          <Popover.Button
            className={classnames(
              'p-1 relative rounded-full w-5 h-5  group-hover:bg-selected',
              open ? 'bg-blue' : 'bg-blue'
            )}
          >
            <div
              className={classnames(
                ' group-hover:bg-[#AE9EFF] h-full justify-center flex items-center rounded-full',
                open ? 'bg-[#AE9EFF]' : 'bg-white'
              )}
            />
          </Popover.Button>
          <Popover.Panel>
            {({ close, open }) => children({ close, open })}
          </Popover.Panel>
        </div>
      )}
    </Popover>
  )
}

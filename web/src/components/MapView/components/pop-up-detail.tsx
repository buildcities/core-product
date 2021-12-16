import React from 'react'
import ListCard from 'src/components/bit.dev/list-card'
import { useDetectClickOutside } from 'react-detect-click-outside'

type PopUpDetailProps = {
  data?: { name: string; country: string; images: { dataURL: string }[] }
  close?: () => void
  open: boolean
}

export const PopUpDetail: React.FC<PopUpDetailProps> = ({
  data,
  close,
  open,
}) => {
  const ref = useDetectClickOutside({ onTriggered: close })

  return (
    <ListCard
      ref={ref}
      isActive={open}
      className="absolute -top-40 left-10 z-10"
      title={data.name}
      subTitle={data.country}
      src={data.images[0].dataURL}
    />
  )
}

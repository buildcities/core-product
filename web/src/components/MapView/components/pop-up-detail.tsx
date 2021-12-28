import React from 'react'
import ListCard from 'src/components/bit.dev/list-card'

type PopUpDetailProps = {
  data?: {
    id: number
    name: string
    country: string
    images: { dataURL: string }[]
  }
  close?: () => void
  open: boolean
  onClick: (payload: string | number) => void
}

export const PopUpDetail: React.FC<PopUpDetailProps> = ({
  data,
  open,
  onClick,
}) => {
  const _onClick = () => {
    //console.log(data)
    onClick && onClick(data.id)
  }

  return (
    <ListCard
      isActive={open}
      className="absolute -top-40 left-10 z-10"
      title={data?.name}
      subTitle={data?.country}
      id={data.id}
      onClick={_onClick}
      src={data?.images[0]?.dataURL}
    />
  )
}

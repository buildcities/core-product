import React from 'react'

export type PictureCardProps = {
  src?: string
  title: string
  subTitle?: string
}

export default function PictureCard({ src, title }: PictureCardProps) {
  return (
    <div className="max-w-[276px] h-[36px]">
      <image href={src} />
      <div>{title}</div>
    </div>
  )
}

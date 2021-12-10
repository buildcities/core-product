import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import React from 'react'

export type PictureCardProps = {
  src?: string
  title: string
  subTitle?: string
  icon?: string
}

export default function PictureCard({
  src,
  title,
  subTitle,
  icon,
}: PictureCardProps) {
  return (
    <div className="bg-cardBackground max-w-[276px] border border-transparent  text-mainText rounded-md md:rounded-lg h-[365px]">
      <img
        alt="hub "
        className="object-cover rounded-t-md md:rounded-t-lg aspect-auto h-[276px] w-[276px]"
        src={src}
      />
      <div className="m-4">
        <span className="flex">
          {icon && (
            <IconItem
              icon="pin"
              className="text-[#C4C4C4] h-[18px] w-[14px] mr-[9px]"
            />
          )}
          <Paragraph className="text-mainText-lighter" text={subTitle} />
        </span>
        <Heading type="H4" text={title} />
      </div>
    </div>
  )
}

PictureCard.defaultProps = {
  icon: 'pin',
}

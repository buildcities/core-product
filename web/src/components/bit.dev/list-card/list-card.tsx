import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import React, { RefObject } from 'react'

export type PictureCardProps = {
  src?: string
  title: string
  subTitle?: string
  icon?: string
  className?: string
  isActive?: boolean
  ref?: RefObject<undefined>
}

export default function PictureCard({
  src,
  title,
  subTitle,
  icon,
  className,
  isActive,
  ref,
}: PictureCardProps) {
  return (
    <div
      ref={ref}
      className={classNames(
        'bg-cardBackground max-w-[276px] border-2  cursor-pointer text-mainText hover:border-selected rounded-md md:rounded-lg h-[365px]',
        isActive ? 'border-selected' : 'border-transparent',
        className
      )}
    >
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

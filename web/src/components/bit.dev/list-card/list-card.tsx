import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import React, { RefObject } from 'react'
import { motion } from 'framer-motion'
import { Loader } from '@buildcities/build-ui.ui.base.loader'

export type PictureCardProps = {
  id?: number | string
  src?: string
  title: string
  subTitle?: string
  ownerId?: string
  icon?: string
  className?: string
  isActive?: boolean
  ref?: RefObject<undefined>
  onClick?: (payload: string | number) => void
}

export default function PictureCard({
  src,
  title,
  subTitle,
  icon,
  className,
  isActive,
  ref,
  onClick,
  id,
}: PictureCardProps) {
  const _onClick = () => {
    onClick && onClick(id)
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.7,
      }}
    >
      <button
        onClick={_onClick}
        ref={ref}
        className={classNames(
          'bg-cardBackground min-w-[276px] border-2 text-left  cursor-pointer text-mainText hover:border-selected rounded-md md:rounded-lg h-[365px]',
          isActive ? 'border-selected' : 'border-transparent',
          className
        )}
      >
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0">
            <Loader loader="spinner" className="border-white" />
          </div>
          <img
            alt="hub "
            className="relative z-10 object-cover rounded-t-md md:rounded-t-lg aspect-auto h-[276px] w-full"
            src={src}
          />
        </div>
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
      </button>
    </motion.div>
  )
}

PictureCard.defaultProps = {
  icon: 'pin',
}

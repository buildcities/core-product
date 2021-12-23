import classNames from 'classnames'
import React from 'react'

type ImageViewerProps = {
  images: { dataURL: string }[]
  className?: string
}

export default function ImageViewer({ images, className }: ImageViewerProps) {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 md:grid-cols-3 md:gap-4 xs:gap-y-4',
        className
      )}
    >
      {images?.length &&
        images.map((item, indx) => (
          <button
            key={indx}
            className={classNames(
              'h-max',
              indx == 0 ? 'md:col-span-2 md:row-span-2' : ''
            )}
          >
            <img
              className={classNames(
                indx == 0
                  ? 'md:w-[520px] md:h-[460px]'
                  : 'md:h-[222px] md:w-[250px] md:block hidden',
                'object-fill object-center rounded-lg'
              )}
              src={item.dataURL}
              alt=""
            />
          </button>
        ))}
    </div>
  )
}

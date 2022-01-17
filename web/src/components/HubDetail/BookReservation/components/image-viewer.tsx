/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import ModalView from 'src/components/bit.dev/modalview'
import ImageGallery from '../../common/components/ImageGallery/ImageGallery'

type ImageViewerProps = {
  images: { dataURL: string }[]
  className?: string
}

export default function ImageViewer({ images, className }: ImageViewerProps) {
  const [open, setOpen] = useState(false)
  const _onClick = useCallback(() => setOpen(true), [open])
  return (
    <div>
      <div
        className={classNames(
          ' grid  ',
          images.length < 2
            ? 'grid-cols-1'
            : ' grid-cols-1 md:grid-cols-3 md:gap-4 xs:gap-y-4',
          className
        )}
      >
        {images?.length &&
          images.slice(0, 3).map((item, indx) => (
            <button
              key={indx}
              onClick={_onClick}
              className={classNames(
                'h-max',
                indx == 0 && images.length > 1
                  ? 'md:col-span-2 md:row-span-2'
                  : ''
              )}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  className={classNames(
                    images.length > 1
                      ? indx == 0
                        ? 'md:w-[520px] md:h-[460px]'
                        : 'md:h-[222px] md:w-[250px] md:block hidden'
                      : '',
                    'object-cover w-full group-hover:opacity-75'
                  )}
                  src={item.dataURL}
                  alt=""
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 absolute top-0 w-full h-full"
                />
              </div>
            </button>
          ))}
      </div>
      <ModalView open={open} setOpen={setOpen}>
        <ImageGallery />
      </ModalView>
    </div>
  )
}

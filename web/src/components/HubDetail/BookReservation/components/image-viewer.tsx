/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import ModalView from 'src/components/bit.dev/modalview'
import ImageGallery from '../../common/components/ImageGallery/ImageGallery'
import { Loader } from '@buildcities/build-ui.ui.base.loader'

type ImageViewerProps = {
  images: { dataURL: string }[]
  className?: string
}

export default function ImageViewer({ images, className }: ImageViewerProps) {
  const [open, setOpen] = useState(false)
  const _onClick = useCallback(() => setOpen(true), [open])
  return (
    <div
      className={classNames(
        ' grid  flex-grow',
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
            <div className="relative group overflow-hidden rounded-lg h-full w-full lg:min-h-[calc(100vw-500px)] xl:h-[640px] xl:min-h-[auto]">
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0">
                <Loader loader="spinner" className="border-white" />
              </div>
              <img
                className={classNames(
                  images.length > 1
                    ? indx == 0
                      ? 'md:w-[520px] md:h-[460px]'
                      : 'md:h-[222px] md:w-[250px] md:block hidden'
                    : '',
                  'relative z-10 object-cover h-full'
                )}
                src={item.dataURL}
                alt=""
              />
              <div className="bg-gradient-to-b from-transparent to-black opacity-0 absolute top-0 w-full h-full group-hover:opacity-70 pointer-events-none z-20 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      <ModalView open={open} setOpen={setOpen}>
        <ImageGallery />
      </ModalView>
    </div>
  )
}

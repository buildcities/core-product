/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react'
import ModalView from 'src/components/bit.dev/modalview'
import ImageGallery from '../../common/components/ImageGallery/ImageGallery'
import { Loader } from '@buildcities/build-ui.ui.base.loader'

type HubImageProps = {
  hubImage: string
  altText: string
}
export default function HubImage({ hubImage, altText }: HubImageProps) {
  const [open, setOpen] = useState(false)
  const _onClick = useCallback(() => setOpen(true), [open])
  return (
    <div className="flex-grow  flex-1">
      <div
        aria-hidden
        onClick={_onClick}
        className="relative cursor-pointer group h-full rounded-lg overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0">
          <Loader loader="spinner" className="border-white" />
        </div>
        <img
          src={hubImage}
          className="relative z-10 object-cover h-full"
          alt={altText}
        />
        <div className="bg-gradient-to-b from-transparent to-black opacity-0 absolute top-0 w-full h-full group-hover:opacity-70 pointer-events-none z-20 transition-opacity duration-300" />
      </div>
      <ModalView open={open} setOpen={setOpen}>
        <ImageGallery />
      </ModalView>
    </div>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react'
import ModalView from 'src/components/bit.dev/modalview'
import ImageGallery from '../../common/components/ImageGallery/ImageGallery'

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
        className="relative cursor-pointer group h-full"
      >
        <img
          src={hubImage}
          className="object-cover h-full group-hover:opacity-60  rounded-lg"
          alt={altText}
        />
        <div
          aria-hidden="true"
          className="bg-gradient-to-b from-transparent to-black opacity-50 absolute top-0 w-full h-full"
        />
      </div>
      <ModalView open={open} setOpen={setOpen}>
        <ImageGallery />
      </ModalView>
    </div>
  )
}

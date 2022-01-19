import { Paragraph } from '@buildcities/build-ui.components.all'
import React from 'react'

type AmenitiesButtonProps = {
  onClick?: () => void
  type: 'button' | 'submit'
}

export default function AmenitiesButton({
  onClick,
  type,
}: AmenitiesButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border py-[6px] px-4 border-blue rounded-lg group bg-cardBackground"
    >
      <Paragraph
        className="font-fira text-paragraph group-hover:text-white"
        text="Add amenities"
      />
    </button>
  )
}

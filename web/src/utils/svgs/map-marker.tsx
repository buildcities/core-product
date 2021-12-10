import classNames from 'classnames'
import React from 'react'

type IconProps = {
  className?: string
}

export default function Component({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={classNames('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#a)">
        <circle cx="20" cy="20" r="16" fill="#7ABFF5" />
        <circle cx="20" cy="20" r="6" fill="#fff" />
      </g>
      <circle cx="20" cy="20" r="16" fill="#7ABFF5" />
      <circle cx="20" cy="20" r="6" fill="#fff" />
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_551_2507"
          />
        </filter>
      </defs>
    </svg>
  )
}


import classNames from 'classnames'
import React from 'react'

type IconProps = {
  className?: string
}

export default function Component({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
      className={classNames('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18.9998C5.73693 17.9224 4.56619 16.7413 3.5 15.4688C1.9 13.5578 8.83662e-07 10.7118 8.83662e-07 7.99981C-0.00141728 5.16735 1.70425 2.6132 4.32107 1.5292C6.93789 0.445211 9.95007 1.04505 11.952 3.04881C13.2685 4.35941 14.0059 6.14219 14 7.99981C14 10.7118 12.1 13.5578 10.5 15.4688C9.43382 16.7413 8.26307 17.9224 7 18.9998ZM7 4.99981C5.92821 4.99981 4.93782 5.5716 4.40193 6.49981C3.86603 7.42801 3.86603 8.5716 4.40193 9.49981C4.93782 10.428 5.92821 10.9998 7 10.9998C8.65686 10.9998 10 9.65666 10 7.99981C10 6.34295 8.65686 4.99981 7 4.99981Z"
        fill="#00DB9A"
      />
    </svg>
  )
}

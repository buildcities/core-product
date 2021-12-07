import { Heading } from '@buildcities/build-ui.ui.base.heading'
import classNames from 'classnames'
import React from 'react'

export type NavBarProps = {
  /**
   * container class.
   */
  className?: string
  /**
   * navbar content.
   */
  children?: React.ReactElement
  /**
   * a text to be rendered in the component.
   */
  text?: string
}

export function NavBar({ className, children, text }: NavBarProps) {
  return (
    <div
      className={classNames(
        'flex-1  flex flex-col min-h-0 relative  overflow-x-hidden',
        className
      )}
    >
      <div className="flex-1 items-center flex flex-col pt-5 w-full  pb-4 ">
        <div>
          <div className="flex flex-shrink-0 px-4 pb-4">
            <Heading type="H4" text={text} className="text-white -ml-2" />
          </div>
          <div className="absolute z-20 left-0 top-0 w-full  h-[65px] border-b border-[#202020]" />
          <nav className="mt-10 flex-1 px-2  space-y-0">{children}</nav>
        </div>
      </div>
    </div>
  )
}

NavBar.defaultProps = {
  text: 'build_',
  className: 'bg-background',
}

import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'

type TwoColumnLayoutLayoutProps = {
  children?: React.ReactNode
  sideBar?: React.ReactElement
  metaTitle?: string
  metaDescription?: string
}

const TwoColumnLayoutLayout = ({
  children,
  sideBar,
  metaTitle,
  metaDescription,
}: TwoColumnLayoutLayoutProps) => {
  return (
    <div className="w-full">
      <MetaTags description={metaDescription} title={metaTitle} />
      <LayoutHeader />
      <nav className=" hidden md:block border-r h-full pt-10  pr-4 sm:pr-8 md:px-20 lg:px-28  text-white  fixed overflow-y-auto w-full max-w-sm lg:max-w-[420px] border-outline">
        {sideBar}
      </nav>

      <main className="max-w-7xl mx-auto flex pt-10 flex-cols md:pl-[384px] lg:pl-[420px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}

export default TwoColumnLayoutLayout

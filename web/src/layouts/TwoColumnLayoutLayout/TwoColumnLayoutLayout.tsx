import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'
import { NavBar } from '@buildcities/build-ui.components.all'

type TwoColumnLayoutLayoutProps = {
  children?: React.ReactNode
  sideBar?: React.ReactNode
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
    <div>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex  md:w-[494px] md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <NavBar className="bg-background z-40">{sideBar}</NavBar>
      </div>
      <div className="md:pl-[494px]  h-screen  flex flex-col flex-1">
        <LayoutHeader />
        <main className="border-l h-full border-[#202020]">
          <div className="py-10 h-full">
            <div className="max-w-7xl h-full  mx-auto px-4 sm:px-6 md:px-8">
              <MetaTags title={metaTitle} description={metaDescription} />
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TwoColumnLayoutLayout

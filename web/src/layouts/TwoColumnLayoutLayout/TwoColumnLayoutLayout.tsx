import React from 'react'

import BaseLayout from '../BaseLayout/BaseLayout'

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
    <BaseLayout metaTitle={metaTitle} metaDescription={metaDescription}>
      <nav className=" hidden md:block border-r h-full pt-10  pr-4 sm:pr-8 md:px-20 lg:px-28  text-white  fixed overflow-y-auto w-full max-w-xs lg:max-w-[420px] border-outline">
        {sideBar}
      </nav>

      <main className="max-w-7xl mx-auto flex pt-10 flex-cols md:pl-[320px] lg:pl-[420px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </BaseLayout>
  )
}

export default TwoColumnLayoutLayout

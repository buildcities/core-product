import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'

type SingleColumnLayoutLayout = {
  children?: React.ReactNode
  metaTitle: string
  metaDescription?: string
}

const SingleColumnLayoutLayout = ({
  children,
  metaTitle,
  metaDescription,
}: SingleColumnLayoutLayout) => {
  return (
    <div>
      <div className="flex flex-col flex-1">
        <LayoutHeader />
        <main className="border-l h-full border-t border-[#202020]">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <MetaTags title={metaTitle} description={metaDescription} />
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SingleColumnLayoutLayout

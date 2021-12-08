import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'

type SingleColumnLagyoutProps = {
  children?: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

const SingleColumnLayout = ({
  children,
  metaTitle,
  metaDescription,
}: SingleColumnLagyoutProps) => {
  return (
    <div className="w-full">
      <MetaTags description={metaDescription} title={metaTitle} />
      <LayoutHeader />

      <main className="max-w-7xl  pt-10 mx-auto flex flex-cols  ">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default SingleColumnLayout

import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'

type BaseLayoutProps = {
  children?: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

const BaseLayout = ({
  children,
  metaTitle,
  metaDescription,
}: BaseLayoutProps) => {
  return (
    <div className="w-full">
      <MetaTags description={metaDescription} title={metaTitle} />
      <LayoutHeader />
      {children}
    </div>
  )
}

export default BaseLayout

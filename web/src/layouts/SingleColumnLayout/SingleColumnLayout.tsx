import classNames from 'classnames'
import React from 'react'
import BaseLayout from '../BaseLayout/BaseLayout'

type SingleColumnLagyoutProps = {
  children?: React.ReactNode
  metaTitle?: string
  metaDescription?: string
  className?: string
}

const SingleColumnLayout = ({
  children,
  metaTitle,
  metaDescription,
  className,
}: SingleColumnLagyoutProps) => {
  return (
    <BaseLayout metaTitle={metaTitle} metaDescription={metaDescription}>
      <main className="max-w-7xl pt-10 mx-auto flex flex-cols ">
        <div
          className={classNames(
            'max-w-6xl mx-auto mb-5 px-4 sm:px-6  lg:px-8',
            className
          )}
        >
          {children}
        </div>
      </main>
    </BaseLayout>
  )
}

export default SingleColumnLayout

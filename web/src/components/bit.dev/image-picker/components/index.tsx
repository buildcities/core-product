import React from 'react'
import { Paragraph } from '@buildcities/build-ui.ui.base.paragraph'
import { Icon } from '@buildcities/build-ui.ionicons'
import classNames from 'classnames'
import { Loader } from '@buildcities/build-ui.ui.base.loader'

export type ImageControlsProps = {
  onEdit?: () => void
  onRemove?: () => void
  loading?: boolean
  className?: string
}

export const ImageControls = ({
  onRemove,
  onEdit,
  className,
  loading,
}: ImageControlsProps) => {
  const _onRemove = () => {
    if (confirm('Are you sure you want to remove this image?')) {
      onRemove && onRemove()
    }
  }

  return (
    <div
      className={classNames(
        ' absolute z-10 space-x-4 lg:space-x-6  flex items-center justify-center left-0 w-full h-full',
        loading ? 'opacity-30 bg-outline' : 'hover:opacity-30 hover:bg-outline',
        className
      )}
    >
      {loading ? (
        <Loader loader="spinner" className="border-white" />
      ) : (
        <>
          <button
            type="button"
            onClick={_onRemove}
            className="bg-white focus:outline-black hover:opacity-75 rounded-full p-3 lg:p-4"
          >
            <Icon
              name="trash"
              className="w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8"
            />
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="bg-white focus:outline-black hover:opacity-75 rounded-full p-3 lg:p-4"
          >
            <Icon
              name="create"
              className="w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8"
            />
          </button>
        </>
      )}
    </div>
  )
}

export type ImageCardProps = {
  title?: string
  source?: string
  onClick?: (payload?: unknown) => void
  onEdit?: (payload?: unknown) => void
  onRemove?: (payload?: unknown) => void
  loading?: boolean
  className?: string
}

export const ImageCard = ({
  source,
  title,
  onClick,
  onEdit,
  onRemove,
  loading,
  className,
}: ImageCardProps) => {
  return (
    <li className="relative focus:outline-black">
      <div
        className={classNames(
          'group w-full aspect-w-1 aspect-h-1 block  border-[#202020] rounded-md md:rounded-lg bg-[#090909] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden',
          source ? 'border' : 'border-2 border-dashed',
          className
        )}
      >
        {source ? (
          <>
            <ImageControls
              loading={loading}
              onEdit={onEdit}
              onRemove={onRemove}
              className={
                loading ? 'opacity-75' : 'opacity-0 group-hover:opacity-75'
              }
            />
            <img
              src={source}
              alt=""
              className="object-cover pointer-events-none"
            />
          </>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className="focus:outline-none  flex group-hover:opacity-75   flex-col w-full h-full justify-center items-center"
          >
            <Icon name="add" className="w-8 h-8 mb-4 rounded-md bg-[#E8E8E8]" />
            <Paragraph
              className="text-center text-paragraph text-md font-fira"
              text="Add Photos"
            />
          </button>
        )}
        {source && title && (
          <>
            <button type="button" className="absolute inset-0">
              <span className="sr-only">View details for {title}</span>
            </button>
            <Paragraph
              className="py-2 md:py-3 text-mainText w-full text-center"
              text={title}
            />
          </>
        )}
      </div>
    </li>
  )
}

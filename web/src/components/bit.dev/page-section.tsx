/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Paragraph } from '@buildcities/build-ui.ui.base.paragraph'
import { Heading } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'

export type PageSectionProps = {
  inputProps?: any
  /**
   * a text to be rendered as section title in the component.
   */
  title: string
  /**
   * a text to be rendered as section description in the component.
   */
  description?: string
  /**
   * extended class style for component container.
   */
  className?: string
  /**
   * extended class style for component header.
   */
  headerClass?: string
  /**
   * extended class style for component description.
   */
  descriptionClass?: string
  /**
   * react components as children of section.
   */
  children?: React.ReactElement
}

export function PageSection({
  children,
  title,
  className,
  description,
  headerClass,
  descriptionClass,
}: PageSectionProps) {
  return (
    <div className={className}>
      <Heading
        className={classNames('text-mainText', headerClass)}
        type="H3"
        text={title}
      />
      <Paragraph
        className={classNames('mb-4 text-paragraph', descriptionClass)}
        text={description}
      />
      <div className="my-4 w-full">{children}</div>
    </div>
  )
}

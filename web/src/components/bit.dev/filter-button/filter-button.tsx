/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paragraph } from '@buildcities/build-ui.ui.base.paragraph'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { IconItem } from '@buildcities/build-ui.ui.base.icon-item'
import { Switch } from '@headlessui/react'
import { Heading } from '@buildcities/build-ui.ui.base.heading'

export type FilterButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  label?: string
  /**
   * show a delete button for  component.
   */
  showDeleteButton?: boolean

  /**
   * active state of component.
   */
  isActive?: boolean
  /**
   * input props for managing form state of component.
   */
  inputProps?: any
  /**
   * style types for component.
   */
  type?: 'large' | 'normal'
  /**
   * delete button click handler.
   */
  onDelete?: () => void
}

export function FilterButton({
  label,
  isActive,
  showDeleteButton,
  inputProps,
  type,
  onDelete,
}: FilterButtonProps) {
  const [enabled, setEnabled] = useState(isActive)
  //const _inputProps = { ...inputProps, ...{ type: "hidden" } };

  const onChange = (payload) => {
    setEnabled(payload)
    inputProps?.onChange && inputProps.onChange(label)
  }

  useEffect(() => {
    if (inputProps?.value == label) {
      setEnabled(true)
    }
    return () => {}
  }, [])

  return (
    <div className="flex ">
      <Switch
        checked={enabled}
        className={classNames(
          'bg-outline border group shrink-0  relative hover:border-selected rounded-md py-[11px] px-[10px] text-mainText',
          enabled ? 'border-selected' : 'border-transparent'
        )}
        onChange={onChange}
      >
        {type == 'normal' ? (
          <Paragraph className="P1 block text-xs" text={label} />
        ) : (
          <Heading text={label} type="H5" />
        )}
        {showDeleteButton && (
          <div aria-hidden onClick={onDelete}>
            <IconItem
              className="bg-error w-4 h-4 font-bold hover:bg-black hover:border-1
        hover:border-error hover:text-error rounded-full text-black
        -right-2 -top-1 absolute"
              icon="close"
            />
          </div>
        )}
      </Switch>
    </div>
  )
}

FilterButton.defaultProps = {
  type: 'normal',
}

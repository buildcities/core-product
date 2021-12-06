/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Paragraph } from '@buildcities/build-ui.ui.base.paragraph'
import { Icon } from '@buildcities/build-ui.ionicons'
import { Switch } from '@headlessui/react'
import className from 'classnames'
import classNames from 'classnames'

export type SelectButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  label: string

  /**
   * icon name for display.
   */
  icon: string
  /**
   * toggle for selected state.
   */
  isActive?: string | boolean

  inputProps?: any
}

export function SelectButton({
  icon,
  label,
  isActive,
  inputProps,
}: SelectButtonProps) {
  const toBoolean = (payload: string | boolean) => {
    return typeof payload == 'boolean'
      ? payload
      : payload.toLowerCase() === 'true'
  }
  const [enabled, setEnabled] = useState(toBoolean(isActive))
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
    <Switch
      checked={enabled}
      className={classNames(
        'bg-cardBackground rounded-lg max-w-full min-w-[560px] h-[172px] p-4',
        { 'border border-selected': enabled }
      )}
      onChange={onChange}
    >
      <div className="flex  content-center">
        <Icon
          name={icon}
          className={className(
            'w-8 h-8 mb-2 ',
            { 'text-selected': enabled },

            { 'text-normal': !enabled }
          )}
        />
        <Paragraph
          className="text-paragraph py-[2px] ml-1 text-center"
          text={label}
        />
      </div>
    </Switch>
  )
}

SelectButton.defaultProps = {
  icon: 'cafe',
  isActive: false,
}

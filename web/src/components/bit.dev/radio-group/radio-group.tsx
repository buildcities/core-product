/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { RadioGroup as HeadlesRadioGroup } from '@headlessui/react'
import { Card } from '@buildcities/build-ui.ui.mobile.card'

export type RadioOptionProps = {
  label: string
  icon?: string
  children?: ({
    checked,
    label,
    value,
    icon,
  }: {
    checked: boolean
    label?: string
    value?: string
    icon?: string
  }) => React.ReactElement
}

export type RadioGroupProps = {
  /**
   * group label for screen readers.
   */
  label?: string
  /**
   *  children component for radio group  for component
   */
  children: any
  /**
   * initial value for component
   */
  defaultValue?: any
  /**
   * group options container class
   */
  className?: string
  /**
   * controlled form input props
   */
  inputProps?: any
  /**
   * group  container class
   */
  containerClass?: string
}

export function RadioGroup({
  label,
  defaultValue,
  className,
  inputProps,
  children,
  containerClass,
}: RadioGroupProps) {
  const [selected, setSelected] = useState(
    inputProps?.value || defaultValue?.label
  )

  const onChange = (payload: RadioOptionProps) => {
    setSelected(payload)
    inputProps?.onChange && inputProps.onChange(payload)
  }

  return (
    <HeadlesRadioGroup
      className={containerClass}
      value={selected}
      onChange={onChange}
    >
      <HeadlesRadioGroup.Label className="sr-only">
        {label}
      </HeadlesRadioGroup.Label>
      <div className={className}>{children}</div>
    </HeadlesRadioGroup>
  )
}

export function RadioOption(props: RadioOptionProps) {
  return (
    <HeadlesRadioGroup.Option className="cursor-pointer " value={props.label}>
      {({ checked }) => {
        return props.children ? (
          props.children({ ...props, checked })
        ) : (
          <Card icon={props?.icon} text={props?.label} isActive={checked} />
        )
      }}
    </HeadlesRadioGroup.Option>
  )
}
RadioGroup.defaultProps = {
  className: 'flex space-x-2',
}

import React from 'react'
import { RadioGroup, RadioOption, RadioOptionProps } from './radio-group'

const options: RadioOptionProps[] = [
  {
    label: 'working 24/7',
    icon: 'clock',
  },
  { label: 'Not working on weekend', icon: 'calendar' },
  { label: 'Closed on public holidays', icon: 'wine' },
]

export const BasicRadioGroup = () => {
  return (
    <RadioGroup label="Calendar" defaultValue={options[1]}>
      {options.map((option, indx) => (
        <RadioOption key={indx} {...option} />
      ))}
    </RadioGroup>
  )
}

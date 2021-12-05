import {
  SelectButtonProps,
  SelectButton,
} from '@buildcities/build-ui.components.all'
import { Label } from '@redwoodjs/forms'
import classNames from 'classnames'
import ControlledInput from '../ControlledInput/ControlledInput'

type SelectButtonsProps = {
  selectProps: SelectButtonProps[]
  label?: string
  className?: string
  name: string
}

const SelectButtons = ({
  selectProps,
  label,
  name,
  className,
}: SelectButtonsProps) => {
  return (
    <div>
      {' '}
      <Label className="text-paragraph mb-2 text-sm  P1 font-sans" name={name}>
        {label}
      </Label>
      <div className={classNames('flex flex-auto flex-wrap', className)}>
        {selectProps?.length &&
          selectProps.map((props, index) => {
            const _name = `${name}.${index}`
            return (
              <div key={index} className="mr-2 mb-2">
                <ControlledInput name={_name}>
                  {(inputProps) => {
                    return <SelectButton {...props} inputProps={inputProps} />
                  }}
                </ControlledInput>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SelectButtons

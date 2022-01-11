/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FilterButtonProps,
  FilterButton,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import { isString } from 'lodash'
import ControlledInput from '../ControlledInput/ControlledInput'

type FilterButtonsProps = {
  selectProps: FilterButtonProps[] | string[]
  controlledProps?: Record<string, undefined>
  className?: string
  name: string
  children?: (payload: unknown) => React.ReactElement
  renderPeer?: () => any
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectProps,
  name,
  className,
  controlledProps,
  children,
  renderPeer,
}) => {
  return (
    <div className={classNames('flex flex-auto flex-wrap', className)}>
      {selectProps?.length &&
        selectProps.map((props, index) => {
          const _name = `${name}.${index}`
          const _props = isString(props) ? { label: props } : props
          return (
            <div key={index} className="mr-2 mb-2">
              <ControlledInput {...controlledProps} name={_name}>
                {(inputProps) => {
                  return children ? (
                    children({ ..._props, ...inputProps })
                  ) : (
                    <FilterButton
                      type="large"
                      {..._props}
                      inputProps={inputProps}
                    />
                  )
                }}
              </ControlledInput>
            </div>
          )
        })}
      {renderPeer && renderPeer()}
    </div>
  )
}

export default FilterButtons

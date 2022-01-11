import { hoursData, aMpMData, minutesData } from './presets'
import ControlledInput from 'src/components/ControlledInput/ControlledInput'
import { SelectInput } from '@buildcities/build-ui.components.all'

export const TimeSelector: React.FC<{
  rootName?: string
}> = ({ rootName }) => (
  <div className="flex space-x-2 flex-1  ">
    <ControlledInput name={`availability.${rootName}.hours`}>
      {(inputProps) => (
        <SelectInput
          defaultValue={{ label: 'hours', value: '' }}
          options={hoursData}
          inputProps={inputProps}
        />
      )}
    </ControlledInput>
    <ControlledInput name={`availability.${rootName}.minutes`}>
      {(inputProps) => (
        <SelectInput
          defaultValue={{ label: 'minutes', value: '' }}
          options={minutesData}
          inputProps={{
            ...inputProps,
            ...{ name: `${inputProps.name}.minutes` },
          }}
        />
      )}
    </ControlledInput>
    <ControlledInput name={`availability.${rootName}.period`}>
      {(inputProps) => (
        <SelectInput
          defaultValue={{ label: 'period', value: '' }}
          options={aMpMData}
          inputProps={inputProps}
        />
      )}
    </ControlledInput>
  </div>
)

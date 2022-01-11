import ToggleSwitch from 'src/components/bit.dev/toggle-switch'
import ControlledInput from 'src/components/ControlledInput/ControlledInput'

type ComponentProps = {
  name: string
}
const Component = ({ name }: ComponentProps) => {
  return (
    <ControlledInput name={name}>
      {({ value, onChange }) => (
        <ToggleSwitch isActive={value == true} setActive={onChange} />
      )}
    </ControlledInput>
  )
}

export default Component

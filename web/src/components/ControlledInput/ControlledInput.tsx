import {
  ControllerRenderProps,
  FieldValues,
  useController,
  UseControllerProps,
} from '@redwoodjs/forms'

interface IControlledInput extends UseControllerProps {
  children?: (
    field: ControllerRenderProps<FieldValues, string>
  ) => React.ReactElement
}

const ControlledInput: React.FC<IControlledInput> = (props) => {
  const { field } = useController(props)
  return <>{props.children(field)}</>
}

export default ControlledInput

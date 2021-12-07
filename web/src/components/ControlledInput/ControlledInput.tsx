import {
  ControllerRenderProps,
  FieldValues,
  useController,
  UseControllerProps,
} from '@redwoodjs/forms'
import { ReactElement } from '@redwoodjs/testing/node_modules/@types/react'

interface IControlledInput extends UseControllerProps {
  children?: (field: ControllerRenderProps<FieldValues, string>) => ReactElement
}

const ControlledInput: React.FC<IControlledInput> = (props) => {
  const { field } = useController(props)
  return <>{props.children(field)}</>
}

export default ControlledInput

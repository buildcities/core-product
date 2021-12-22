import { Label, FieldError } from '@redwoodjs/forms'
import classNames from 'classnames'

type FormFieldProps = {
  label?: string
  error?: string
  name: string
  className?: string
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  children,
  label,
  error,
  className,
}) => {
  return (
    <div className={classNames('flex-1 flex items-center', className)}>
      <Label
        name={name}
        className={classNames('text-paragraph mr-8 w-16 font-sans font-bold')}
        errorClassName="text-error"
      >
        {label}
      </Label>
      <div className="flex-1">
        {children}
        <FieldError className="text-error" name={name}>
          {error}
        </FieldError>
      </div>
    </div>
  )
}

export default FormField

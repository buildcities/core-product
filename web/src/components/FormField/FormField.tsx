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
    <div className={classNames('flex-1 flex items-center ', className)}>
      {label && (
        <Label
          name={name}
          className={classNames('text-paragraph mr-8 w-16 font-sans font-bold')}
          errorClassName="text-error mr-8 w-16 font-sans font-bold"
        >
          {label}
        </Label>
      )}
      <div className="flex-1">
        {children}
        <FieldError className="text-error text-xs" name={name}>
          {error}
        </FieldError>
      </div>
    </div>
  )
}

export default FormField

import { Heading, Paragraph } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'

type FormSectionProps = {
  title: string
  description?: string
  className?: string
}

const FormSection: React.FC<FormSectionProps> = ({
  children,
  title,
  className,
  description,
}) => {
  return (
    <div className={className}>
      <Heading className="text-mainText" type="H3" text={title} />
      <Paragraph className="mb-4 text-paragraph" text={description} />
      <div className="my-4 w-full">{children}</div>
    </div>
  )
}

export default FormSection

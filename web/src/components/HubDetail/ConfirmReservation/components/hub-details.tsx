import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type HubDetailsProps = {
  name: string
  location: string
  className?: string
  type?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5'
}

export default function HubDetails({
  name,
  location,
  className,
  type,
}: HubDetailsProps) {
  return (
    <div className={classNames('pb-6', className)}>
      <Heading text={name} type={type} />
      <span className="flex">
        <IconItem icon="pin" />
        <Paragraph text={location} />
      </span>
    </div>
  )
}
HubDetails.defaultProps = {
  type: 'H1',
}

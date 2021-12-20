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
  type?: string
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
/* <h1 className="text-white md:text-5xl text-3xl font-medium md:mb-4 mb-2 font-sans">
        {name}
        </h1>
<div className="flex md:mb-7 mb-4">
        <MapPin className="mr-2" />
        <p className="text-paragraph text-sm">{location}</p>
      </div>
        */

import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type HubDetailsProps = {
  title: string
  subTitle: string
  className?: string
  type?: string
}

export default function Header({
  title,
  subTitle,
  className,
  type,
}: HubDetailsProps) {
  return (
    <div className={classNames('pb-6', className)}>
      <Heading text={title} type={type} />
      <span className="flex">
        <IconItem icon="pin" />
        <Paragraph text={subTitle} />
      </span>
    </div>
  )
}
Header.defaultProps = {
  type: 'H1',
}

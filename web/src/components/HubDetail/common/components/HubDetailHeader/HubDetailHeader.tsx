import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type HubDetailHeaderProps = {
  title: string
  subTitle: string
  containerClass?: string
  className?: string
  subTitleClass?: string
}
const HubDetailHeader = ({
  title,
  subTitle,
  className,
  containerClass,
  subTitleClass,
}: HubDetailHeaderProps) => {
  return (
    <div className={classNames('pb-6', containerClass)}>
      <Heading className={className} text={title} type="H1" />
      <span className="flex">
        <IconItem icon="pin" />
        <Paragraph className={subTitleClass} text={subTitle} />
      </span>
    </div>
  )
}

export default HubDetailHeader

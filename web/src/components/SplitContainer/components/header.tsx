import {
  Heading,
  IconItem,
  Paragraph,
} from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type HeaderProps = {
  title: string
  subTitle: string
  containerClass?: string
  className?: string
  subTitleClass?: string
}
const Header = ({
  title,
  subTitle,
  className,
  containerClass,
  subTitleClass,
}: HeaderProps) => {
  return (
    <div className={classNames('pb-6 text-mainText', containerClass)}>
      <Heading className={className} text={title} type="H1" />
      {subTitle && (
        <span className="flex items-center">
          <IconItem icon="pin" className="w-5 h-5 mr-2" />
          <Paragraph className={subTitleClass} text={subTitle} />
        </span>
      )}
    </div>
  )
}

export default Header

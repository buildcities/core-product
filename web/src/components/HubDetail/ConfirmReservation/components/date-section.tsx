import { DATES_SECTION_TITLE } from './presets'
import { Heading } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import { PageSection } from 'src/components/bit.dev/page-section'
import { CHECKIN_TEXT, CHECKOUT_TEXT } from '../../common/preset'

const DateViewer: React.FC<{
  title: string
  content?: string
  className?: string
  contentClass?: string
}> = ({ title, content, className, contentClass }) => (
  <div className="space-y-2 p-3 ">
    <Heading type="H4" text={title} className={classNames('', className)} />
    <Heading
      type="H3"
      text={content}
      className={classNames('block', contentClass)}
    />
  </div>
)

export type DateSectionProps = {
  checkInDate: string
  checkOutDate: string
}

export default function DateSection({
  checkInDate,
  checkOutDate,
}: DateSectionProps) {
  return (
    <PageSection title={DATES_SECTION_TITLE}>
      <div className="border flex bg-cardBackground divide-x justify-evenly divide-[#343434] border-[#343434] rounded-lg">
        <DateViewer content={checkInDate} title={CHECKIN_TEXT} />
        <DateViewer content={checkOutDate} title={CHECKOUT_TEXT} />
      </div>
    </PageSection>
  )
}

DateSection.defaultProps = {
  checkInDate: '10/10/22',
  checkOutDate: '10/10/22',
}

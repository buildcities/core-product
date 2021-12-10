import { Paragraph } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type FilterButtonProps = {
  text?: string
  isActive?: boolean
}
export default function FilterButton({ text, isActive }: FilterButtonProps) {
  return (
    <button
      className={classNames(
        'bg-outline w-auto border  hover:border-selected rounded-md py-[11px] px-[10px] text-mainText',
        isActive ? 'border-selected' : 'border-transparent'
      )}
    >
      <Paragraph className="P1 text-xs" text={text} />
    </button>
  )
}

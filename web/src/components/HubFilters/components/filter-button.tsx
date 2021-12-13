import { Paragraph } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
type FilterButtonProps = {
  text?: string
  isActive?: boolean
}
export default function FilterButton({ text, isActive }: FilterButtonProps) {
  return (
    <div className="flex">
      <button
        className={classNames(
          'bg-outline border shrink-0  hover:border-selected rounded-md py-[11px] px-[10px] text-mainText',
          isActive ? 'border-selected' : 'border-transparent'
        )}
      >
        <Paragraph className="P1 block text-xs" text={text} />
      </button>
    </div>
  )
}

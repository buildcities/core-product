import { Disclosure } from '@headlessui/react'
import { FilterIcon } from '@heroicons/react/outline'
import classnames from 'classnames'

type MobileFilterButtonProps = {
  className?: string
  children?: React.ReactElement
}

export default function MobileFilterButton({
  className,
  children,
}: MobileFilterButtonProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classnames(
              'rounded-full flex items-center  text-mainText hover:text-selected hover:opacity-100 bg-background p-2 opacity-45',
              className
            )}
          >
            <FilterIcon
              className={`${open ? 'text-selected ' : ''} w-5 h-5 `}
            />
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

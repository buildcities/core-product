import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/viewHubsStore'
import shallow from 'zustand/shallow'

export default function FilterToggle() {
  const { isMapView, toggleView } = useStore(
    (store) => ({ isMapView: store.isMapView, toggleView: store.toggleView }),
    shallow
  )
  return (
    <Switch
      checked={isMapView}
      onChange={toggleView}
      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-transparent w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          isMapView ? 'bg-[#6200EE]' : 'bg-normal',
          'pointer-events-none absolute opacity-40 h-[14px] w-[34px] mx-auto rounded-full transition-colors ease-in-out duration-200'
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          isMapView
            ? 'translate-x-5 bg-[#6200EE] border-transparent'
            : 'translate-x-0 bg-white border-gray-200',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 border  rounded-full  shadow transform ring-0 transition-transform ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}

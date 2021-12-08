import { MenuAlt2Icon } from '@heroicons/react/outline'
import HeaderAuthButton from '../HeaderAuthButton/HeaderAuthButton'
import { Heading } from '@buildcities/build-ui.components.all'

type LayoutHeaderProps = {
  showMenu?: boolean
}

const LayoutHeader = ({ showMenu }: LayoutHeaderProps) => {
  return (
    <div className="sticky top-0 z-10 border-b pr-4 sm:pr-8 md:px-20 lg:px-28 border-[#202020] flex py-2 sm:py-4  h-[64px] items-center  bg-[#090909] shadow">
      {showMenu && (
        <button
          type="button"
          className="px-4 h-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      <Heading
        type="H4"
        text={'build_'}
        className="text-white block  flex-grow "
      />

      <div className="flex-shrink  justify-self-end">
        <HeaderAuthButton />
      </div>
    </div>
  )
}

LayoutHeader.defaultProps = {
  showMenu: true,
}

export default LayoutHeader

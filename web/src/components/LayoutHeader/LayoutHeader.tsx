import { MenuAlt2Icon } from '@heroicons/react/outline'
import HeaderAuthButton from '../HeaderAuthButton/HeaderAuthButton'
import HeaderProfile from '../HeaderProfile/HeaderProfile'
const LayoutHeader = () => {
  return (
    <div className="sticky top-0 z-10  flex-shrink-0 flex h-[64px]  bg-[#090909] shadow">
      <button
        type="button"
        className="px-4 border-r  border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex flex-row-reverse justify-between">
        <div className="ml-4 flex items-center md:ml-6">
          {/* Auth Button */}
          <HeaderAuthButton />

          {/* Profile dropdown */}
          <HeaderProfile />
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader

import { MenuAlt2Icon } from '@heroicons/react/outline'
import HeaderAuthButton from '../HeaderAuthButton/HeaderAuthButton'
import { Heading } from '@buildcities/build-ui.components.all'
import HeaderProfile from '../HeaderProfile/HeaderProfile'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { prepareHeaderMenu } from '../HeaderProfile/presets'

type LayoutHeaderProps = {
  showMenu?: boolean
}

const LayoutHeader = ({ showMenu }: LayoutHeaderProps) => {
  const { isAuthenticated, logOut, userMetadata } = useAuth()
  const _onHeaderBtnClick = () => {
    navigate(routes.listHubs({ stepId: 0 }))
  }
  return (
    <div className="sticky top-0 z-20 border-b pr-4 sm:pr-8 md:px-20 lg:px-28 border-[#202020] flex py-2 sm:py-4  h-[64px] items-center  bg-[#090909] shadow">
      {showMenu && (
        <button
          type="button"
          className="px-4 h-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
      <Link to={routes.viewHubs()} className="flex-grow ">
        <Heading
          type="H4"
          text={'build_'}
          className="text-white block font-fira "
        />
      </Link>

      <div className="flex-shrink  justify-self-end">
        <div className="flex  items-center">
          {isAuthenticated ? (
            <>
              <HeaderAuthButton onClick={_onHeaderBtnClick} />
              <HeaderProfile
                profileUrl={userMetadata?.user_metadata?.avatar_url}
                userNavigation={prepareHeaderMenu(logOut)}
              />
            </>
          ) : (
            <>{/* consider placing loader here */}</>
          )}
        </div>
      </div>
    </div>
  )
}

LayoutHeader.defaultProps = {
  showMenu: true,
}

export default LayoutHeader

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import classNames from 'classnames'
import { Paragraph } from '@buildcities/build-ui.components.all'
import { TUserNav } from 'src/utils/types'
import AdminModeButton from '../AdminModeButton/AdminModeButton'
import DisconnectWallet from '../DisconnectWallet/DisconnectWallet'

type HeaderProfileTypes = {
  userNavigation?: TUserNav[]
  profileUrl?: string
}

const HeaderProfile = ({ userNavigation, profileUrl }: HeaderProfileTypes) => {
  return (
    <Menu as="div" className="ml-3 relative w-max">
      <Menu.Button className="max-w-xs bg-black flex items-center text-sm rounded-full focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-indigo-500">
        <span className="sr-only">Open user menu</span>
        <img className="w-12 rounded-full" src={profileUrl} alt="" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation?.length &&
            userNavigation.map((item) => {
              const wrapper = { as: 'button' as any }
              const Wrapper = item.as || wrapper.as
              return (
                <Menu.Item key={item.name}>
                  {() => (
                    <Wrapper
                      to={item?.href}
                      onClick={item?.onClick}
                      className={classNames(
                        'block px-4 py-2 hover:text-selected text-mainText-lighter'
                      )}
                    >
                      <Paragraph className="w-full" text={item.name} />
                    </Wrapper>
                  )}
                </Menu.Item>
              )
            })}
          <Menu.Item>
            <DisconnectWallet />
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-2 border-t border-t-outline">
              <AdminModeButton />
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default HeaderProfile

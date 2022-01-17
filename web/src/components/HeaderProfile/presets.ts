import { Link, routes } from '@redwoodjs/router'
import { TUserNav } from 'src/utils/types'

export const prepareHeaderMenu: (logOut: () => Promise<void>) => TUserNav[] = (
  logOut: () => Promise<void>
) => {
  return [
    { name: 'Your Profile', href: routes.profile(), as: Link },
    { name: 'Reservations', href: routes.viewReservations(), as: Link },
    { name: 'Sign out', onClick: logOut },
  ]
}

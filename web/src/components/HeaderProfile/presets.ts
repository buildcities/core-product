import { TUserNav } from 'src/utils/types'

export const prepareHeaderMenu: (logOut: () => Promise<void>) => TUserNav[] = (
  logOut: () => Promise<void>
) => {
  return [
    { name: 'Your Profile', href: '#' },
    { name: 'Reservations', href: '#' },
    { name: 'Sign out', onClick: () => logOut && logOut() },
  ]
}

export const USER_HEADING_TEXT = 'USER'
export const CHECKIN_HEADING_TEXT = 'CHECK IN'
export const CHECKOUT_HEADING_TEXT = 'CHECK OUT'

import User1 from 'src/components/ListReservations/user1.png'
import User2 from 'src/components/ListReservations/user2.png'
import User3 from 'src/components/ListReservations/user3.png'
import User4 from 'src/components/ListReservations/user4.png'
import User5 from 'src/components/ListReservations/user5.png'
import User6 from 'src/components/ListReservations/user6.png'
import User7 from 'src/components/ListReservations/user7.png'

export const RESERVATION_TITLE = 'All reservations'
export const WAITING_FOR_APPROVAL_TEXT = 'Waiting for approval'
export const CURRENT_RESERVATIONS_TEXT = 'Current Reservations'
export const ADD_HUB_BUTTON_TEXT = 'Add another hub'

export const reservationsUnapprovedData = [
  {
    reservation1: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User1,
      discordName: 'Discord name',
    },
    reservation2: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User2,
      discordName: '',
    },
    reservation3: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User3,
      discordName: '',
    },
  },
]

export const reservationsApprovedData = [
  {
    reservation1: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User4,
      discordName: 'Discord name',
    },
    reservation2: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User5,
      discordName: '',
    },
    reservation3: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User6,
      discordName: '',
    },
    reservation4: {
      address: '0x0100...00032',
      checkIn: '20/2/2021',
      checkOut: '22/2/2021',
      avatar: User7,
      discordName: '',
    },
  },
]

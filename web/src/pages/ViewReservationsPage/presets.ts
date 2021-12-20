import User1 from 'src/components/ListReservations/user1.png'
import User2 from 'src/components/ListReservations/user2.png'
import User3 from 'src/components/ListReservations/user3.png'

export const RESERVATION_BUTTON_TEXT = 'Reservation'
export const RESERVATION_TITLE = 'All reservations'
export const APPROVAL_TEXT = 'Waiting for approval'

export const reservationData = [
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

export type ReservationListItemProps = {
  id?: string
  address?: string
  status?: 'NEW' | 'APPROVED' | 'REJECTED'
  checkInDate?: string
  checkOutDate?: string
  discordName?: string
  avatar?: string
  type?: string
}

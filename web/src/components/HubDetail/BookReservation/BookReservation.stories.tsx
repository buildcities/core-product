import BookReservation from './BookReservation'

const images = [
  {
    dataURL:
      'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    dataURL:
      'https://images.pexels.com/photos/1517145/pexels-photo-1517145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    dataURL:
      'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
]

export const generated = () => {
  return <BookReservation images={images} />
}

export default { title: 'Components/BookReservation' }

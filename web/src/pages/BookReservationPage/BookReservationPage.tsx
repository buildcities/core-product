import BookReservation from 'src/components/HubDetail/BookReservation/BookReservation'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

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
const ConfirmReservationPage = () => {
  return (
    <SingleColumnLayout metaTitle="Confirm-reservation">
      <BookReservation images={images} />
    </SingleColumnLayout>
  )
}

export default ConfirmReservationPage

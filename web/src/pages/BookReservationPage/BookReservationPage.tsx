import BookReservationCell from 'src/components/HubCell'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

const ConfirmReservationPage = ({ id }) => {
  return (
    <SingleColumnLayout metaTitle="Confirm-reservation">
      <BookReservationCell id={id} />
    </SingleColumnLayout>
  )
}

export default ConfirmReservationPage

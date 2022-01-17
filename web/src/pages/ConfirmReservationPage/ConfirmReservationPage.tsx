import ConfirmReservationCell from 'src/components/ConfirmReservationCell'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

const ConfirmReservationPage = ({ id }: { id: string }) => {

  return (
    <SingleColumnLayout metaTitle="Confirm-reservation">
      <ConfirmReservationCell id={id} />
    </SingleColumnLayout>
  )
}

export default ConfirmReservationPage

/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@redwoodjs/auth'
import BookReservationCell from 'src/components/HubCell'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

const ConfirmReservationPage = ({ id }) => {
  const { userMetadata } = useAuth()
  console.log(userMetadata)
  return (
    <SingleColumnLayout metaTitle="Confirm-reservation">
      <BookReservationCell id={id} />
    </SingleColumnLayout>
  )
}

export default ConfirmReservationPage

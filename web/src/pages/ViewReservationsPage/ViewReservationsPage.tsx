import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import ApprovedReservationsCell from 'src/components/ListReservations/ListReservations'

const ViewReservationsPage = () => {
  return (
    <SingleColumnLayout className="w-full" metaTitle="View all reservations">
      <ApprovedReservationsCell />
    </SingleColumnLayout>
  )
}

export default ViewReservationsPage

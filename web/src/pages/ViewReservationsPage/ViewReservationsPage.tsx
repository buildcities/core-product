import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import ViewReservations from 'src/components/ListReservations/ListReservations'

const ViewReservationsPage = () => {
  return (
    <SingleColumnLayout className="w-full" metaTitle="View all reservations">
      <ViewReservations />
    </SingleColumnLayout>
  )
}

export default ViewReservationsPage

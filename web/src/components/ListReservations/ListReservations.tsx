import { RESERVATION_TITLE } from './presets'
import ReservationFilters from './components/reservation-filters'
import UnapprovedReservationsCell from 'src/components/UnapprovedReservationsCell'
import ApprovedReservationsCell from 'src/components/ApprovedReservationsCell'
import { useStore } from 'src/utils/stores/viewReservationStore'

const ViewReservationsPage = () => {
  const selectedView = useStore((store) => store.selectedView)
  return (
    <div>
      <ReservationFilters />

      <h2 className="text-mainText mt-2 font-sans mr-10 font-medium lg:text-5xl text-2xl mb-2">
        {RESERVATION_TITLE}
      </h2>

      {/* Todo: Implement in V2 */}
      {/* <AcceptAllButton /> */}

      {selectedView == 'Reservations' && <UnapprovedReservationsCell isOwner />}

      <ApprovedReservationsCell isOwner={selectedView == 'My Properties'} />
    </div>
  )
}

export default ViewReservationsPage

import HubFilters from 'src/components/HubFilters/HubFilters'
import MapView from 'src/components/MapView/MapView'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import { useStore } from 'src/utils/stores/viewHubsStore'
import HubsCell from 'src/components/HubsCell'
const continentSelector = (store) => ({
  continents: store.continents,
  isMapView: store.isMapView,
  selectedContinent: store.selectedContinent,
})

const ViewHubsPage = () => {
  const { continents, isMapView, selectedContinent } =
    useStore(continentSelector)
  return (
    <SingleColumnLayout metaDescription="List of hubs" metaTitle="Hubs">
      <HubFilters
        filters={continents}
        className="absolute right-0 z-10 top-[65px] bg-cardBackground "
      />
      {isMapView ? (
        <MapView />
      ) : (
        <HubsCell {...{ filter: selectedContinent }} />
      )}
    </SingleColumnLayout>
  )
}

export default ViewHubsPage

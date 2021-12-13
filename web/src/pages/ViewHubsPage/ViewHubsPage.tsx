import HubFilters from 'src/components/HubFilters/HubFilters'
import MapView from 'src/components/MapView/MapView'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import { useStore } from 'src/utils/stores/viewHubsStore'
const continentSelector = (store) => store.continents

const ViewHubsPage = () => {
  const continents = useStore(continentSelector)
  return (
    <SingleColumnLayout metaDescription="List of hubs" metaTitle="Hubs">
      <HubFilters
        filters={continents}
        className="absolute right-0 z-20 top-[65px] bg-cardBackground "
      />
      <MapView />
    </SingleColumnLayout>
  )
}

export default ViewHubsPage

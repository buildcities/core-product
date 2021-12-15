import HubFilters from 'src/components/HubFilters/HubFilters'
import MapView from 'src/components/MapView/MapView'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import { useStore } from 'src/utils/stores/viewHubsStore'
import HubsCell from 'src/components/HubsCell'
import AddressComponent from './AddressComponent'
import image1 from './hero-details.png'
import image2 from './secondary.png'
import image3 from './secondary1.png'

const continentSelector = (store) => ({
  continents: store.continents,
  isMapView: store.isMapView,
})

const HubDetailPage = () => {
  const { continents, isMapView } = useStore(continentSelector)
  return (
    <SingleColumnLayout metaDescription="Hub details" metaTitle="Details">
      <div className="absolute container block left-10">
        <div className="relative flex justify-center left-10">
          <div className="flex justify-left w-full">
            <span className="block text-left text-white">
              Awesome place to stay
            </span>
          </div>
        </div>
        <div className="flex ml-8 w-full min-h-fit">
          <AddressComponent />
        </div>
        <div className="flex justify-left relative left-10">
          <div className="grid 1">
            <img className="object-fill" src={image1} alt="image1"></img>
          </div>
          <div className="flex flex-col">
            <img className="mb-2 ml-4" src={image2} alt="image2"></img>
            <img className="mt-2 ml-4" src={image3} alt="image3"></img>
          </div>
        </div>
      </div>
    </SingleColumnLayout>
  )
}

export default HubDetailPage

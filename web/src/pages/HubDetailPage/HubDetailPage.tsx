import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import { useStore } from 'src/utils/stores/viewHubsStore'
import testImage from '/Users/thomasschipke/git/buildcities/product-mvp/assets/unsplash_4_jQL4JCS98.png'
import testImage1 from '/Users/thomasschipke/git/buildcities/product-mvp/assets/unsplash_p_kICQCOM4s.png'
import testImage2 from '/Users/thomasschipke/git/buildcities/product-mvp/assets/unsplash_VWcPlbHglYc.png'

const continentSelector = (store) => ({
  continents: store.continents,
  isMapView: store.isMapView,
})

const HubDetailPage = () => {
  const { continents, isMapView } = useStore(continentSelector)

  return (
    <>
      <SingleColumnLayout
        metaDescription="Hub Details"
        metaTitle="Details"
      ></SingleColumnLayout>
      <div className="px-96">
        <span className="relative text-2xl text-white">
          Awesome place to stay
        </span>
      </div>
    </>
  )
}

export default HubDetailPage

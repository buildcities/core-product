import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import AddressComponent from './AddressComponent'
import ImageViewer from 'src/components/ImageViewer/ImageViewer'
import Amenities from 'src/components/Amenities/Amenities'

const HubDetailPage = () => {
  return (
    <SingleColumnLayout metaDescription="Hub details" metaTitle="Details">
      <div className="container">
        <div className="Main-Image"></div>
        <div className="Image-2"></div>
        <div className="Image-3"></div>
        <div className="Amenities"></div>
      </div>
    </SingleColumnLayout>
  )
}

export default HubDetailPage

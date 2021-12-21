import { MetaTags } from '@redwoodjs/web'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import Messages from '../../components/Messages/Messages'
import { messagesData } from '../../components/Messages/presets'
import image1 from './image1.png'
import CheckinDates from 'src/components/CheckinDates/CheckinDates'
import MapPin from '../../utils/svgs/map-pin'

const location = 'Los Angeles, Hidden Hills, Ultra Secret Location'

const HubContactPage = () => {
  return (
    <>
      <TwoColumnLayoutLayout
        metaTitle="Hub Contact Page"
        sideBar={<Messages data={messagesData} />}
      >
        <MetaTags title="HubContact" />
        <div>
          <div className="grid grid-cols-3 ml-96">
            <img className="col-span-1" src={image1} alt={`${image1}`}></img>
            <div className="col-span-2">
              <span className="text-white font-bold text-3xl font-sans ml-6">
                Awesome place to stay
              </span>
              <div className="inline-flex ml-6 mt-1">
                <div className="mt-[2px] mb-0">
                  <MapPin />
                </div>
                <div className="ml-2 text-white">{location}</div>
              </div>
              <div className="text-white ml-6">
                <CheckinDates />
              </div>
            </div>
          </div>
        </div>
      </TwoColumnLayoutLayout>
    </>
  )
}

export default HubContactPage

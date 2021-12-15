import { MapPin } from 'src/utils/svgs'

const AddressComponent = () => {
  return (
    <>
      <div className="ml-10 inline-flex justify-between items-baseline">
        <MapPin />
        <span className="flex text-white font-normal inline-block items-start text-sm">
          21 Fake Street, Melbourne, Earth
        </span>
      </div>
    </>
  )
}

export default AddressComponent

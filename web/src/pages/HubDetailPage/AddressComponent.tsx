import MapPinTest from 'src/utils/svgs/map-pin-test'

const AddressComponent = () => {
  return (
    <>
      <div className="inline-flex justify-between items-baseline">
        <MapPinTest />
        <span className="flex text-white font-normal items-start text-sm">
          21 Fake Street, Melbourne, Earth
        </span>
      </div>
    </>
  )
}

export default AddressComponent

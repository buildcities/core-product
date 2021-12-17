import MapPinTest from 'src/utils/svgs/map-pin-test'

export type AddressComponentProps = {
  sliderVisible?: boolean
}

const AddressComponent = ({ sliderVisible }) => {
  return (
    <>
      <div
        className={`${
          sliderVisible ? 'opacity-5' : 'opacity-100'
        } inline-flex justify-between items-baseline`}
      >
        <MapPinTest />
        <span
          className={`{sliderVisible ? 'opacity-5' : 'opacity-100'} flex text-white font-normal items-start text-sm`}
        >
          123 Fake Street, Melbourne, Earth
        </span>
      </div>
    </>
  )
}

export default AddressComponent

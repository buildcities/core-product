import MapPin from '../../../utils/svgs/map-pin'
type HubDetailsProps = {
  name: string
  location: string
}
export default function HubDetails({ name, location }: HubDetailsProps) {
  return (
    <>
      <h1 className="text-white md:text-5xl text-3xl font-medium md:mb-4 mb-2 font-sans">
        {name}
      </h1>
      <div className="flex md:mb-7 mb-4">
        <MapPin className="mr-2" />
        <p className="text-paragraph text-sm">{location}</p>
      </div>
    </>
  )
}

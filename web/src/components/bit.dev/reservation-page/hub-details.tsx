import MapPin from '../../../utils/svgs/map-pin'
type HubDetailsProps = {
  name: string
  location: string
}
export default function HubDetails({ name, location }: HubDetailsProps) {
  return (
    <>
      <h1 className="text-white md:text-5xl text-3xl font-medium mb-4 font-sans">
        {name}
      </h1>
      <div className="flex mb-7">
        <MapPin className="mr-2" />
        <p className="text-paragraph text-sm">{location}</p>
      </div>
    </>
  )
}

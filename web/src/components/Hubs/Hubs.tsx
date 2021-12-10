import ListCard, { PictureCardProps } from 'src/components/bit.dev/list-card'

type HubsProps = {
  hubs?: PictureCardProps[]
}

const Hubs = ({ hubs }: HubsProps) => {
  console.log(hubs)
  return (
    <div className="grid grid-cols-1  gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {hubs?.length &&
        hubs.map((hubData, indx) => <ListCard key={indx} {...hubData} />)}
    </div>
  )
}

export default Hubs

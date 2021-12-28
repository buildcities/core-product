import { navigate, routes } from '@redwoodjs/router'
import ListCard, { PictureCardProps } from 'src/components/bit.dev/list-card'

type HubsProps = {
  hubs?: PictureCardProps[]
}

const onClick = (id: number) => {
  console.log(id)
  navigate(routes.bookReservation({ id }))
}

const Hubs = ({ hubs }: HubsProps) => {
  return (
    <div className="grid grid-cols-1  gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {hubs?.length &&
        hubs.map((hubData, indx) => (
          <ListCard onClick={onClick} key={indx} {...hubData} />
        ))}
    </div>
  )
}

export default Hubs

/* eslint-disable @typescript-eslint/no-unused-vars */
import { navigate, routes } from '@redwoodjs/router'
import ListCard, { PictureCardProps } from 'src/components/bit.dev/list-card'
import AdminControls from '../AdminControls/AdminControls'

type HubsProps = {
  hubs?: PictureCardProps[]
}

const Hubs = ({ hubs }: HubsProps) => {
  /*const [mutate] = useMutation(REMOVE_HUB, {
    refetchQueries: [HUBS_QUERY],
  })*/

  const onClick = (id: number) => {
    navigate(routes.bookReservation({ id }))
  }

  const onEdit = (id?: number) => () => {
    navigate(routes.editHub({ id }))
  }

  const onDelete = (id?: number) => () => {
    window.alert('Feature not active')
  }

  return (
    <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {hubs?.length &&
        hubs.map((hubData, indx) => (
          <div
            key={indx}
            className="relative w-full bg-cardBackground bg-opacity-50"
          >
            <AdminControls
              ownerId={hubData.ownerId}
              className="absolute top-0 w-full"
              onEdit={onEdit(hubData.id as number)}
              onDelete={onDelete(hubData.id as number)}
            />

            <ListCard onClick={onClick} {...hubData} />
          </div>
        ))}
    </div>
  )
}

export default Hubs

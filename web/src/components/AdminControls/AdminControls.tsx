/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconItem } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/authStore'
import { useStore as useUIStore } from 'src/utils/stores/uiStore'

type AdminControlsProps = {
  className?: string
  onDelete?: React.ReactEventHandler
  onEdit?: React.ReactEventHandler
  ownerId?: string
}

const AdminControls = ({
  className,
  onDelete,
  onEdit,
  ownerId,
}: AdminControlsProps) => {
  const userId = useStore((store) => store.userId)
  const isAdminMode = useUIStore((store) => store.isAdminMode)

  return userId && userId && isAdminMode && ownerId == userId ? (
    <div className={classNames('flex justify-center space-x-4 p-4', className)}>
      {/* <span aria-hidden onClick={onDelete}>
        <IconItem
          className="h-full w-12 p-2 rounded-full hover:text-selected  hover:opacity-75 cursor-pointer  bg-cardBackground border border-dashed"
          icon="trash"
        />
      </span> */}
      <span aria-hidden onClick={onEdit}>
        <IconItem
          className="w-12 p-2 h-full rounded-full hover:text-selected  hover:opacity-75 cursor-pointer  bg-cardBackground border border-dashed"
          icon="create"
        />
      </span>
    </div>
  ) : (
    <></>
  )
}

export default AdminControls

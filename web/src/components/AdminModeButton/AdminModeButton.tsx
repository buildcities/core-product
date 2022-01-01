import { Paragraph } from '@buildcities/build-ui.components.all'
import ToggleSwitch from 'src/components/bit.dev/toggle-switch'
import { useStore } from 'src/utils/stores/uiStore'

const AdminModeButton = () => {
  const { isAdminMode, toggleMode } = useStore((store) => ({ ...store }))
  return (
    <div className="w-full flex space-x-2">
      <Paragraph className="text-mainText text-xs" text="Admin Mode" />
      <ToggleSwitch isActive={isAdminMode} setActive={toggleMode} />
    </div>
  )
}

export default AdminModeButton

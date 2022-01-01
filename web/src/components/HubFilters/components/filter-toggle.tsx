import { useStore } from 'src/utils/stores/viewHubsStore'
import shallow from 'zustand/shallow'
import ToggleSwitch from 'src/components/bit.dev/toggle-switch'

export default function FilterToggle() {
  const { isMapView, toggleView } = useStore(
    (store) => ({ isMapView: store.isMapView, toggleView: store.toggleView }),
    shallow
  )
  return <ToggleSwitch setActive={toggleView} isActive={isMapView} />
}

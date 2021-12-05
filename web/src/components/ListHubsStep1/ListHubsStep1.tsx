import EmptyState from '../EmptyState/EmptyState'
import { ShieldIcon, UndulatingFloorIcon } from '../../utils/svgs'
import {
  LIST_HUB_CTA,
  LIST_HUB_WELCOME_TEXT,
  LIST_HUB_WELCOME_TITLE,
} from './presets'
import ListHubsHOC from '../HOC/listHubsHOC'

const ListHubsStep1 = () => {
  return (
    <EmptyState
      ctaName={LIST_HUB_CTA}
      title={LIST_HUB_WELCOME_TITLE}
      description={LIST_HUB_WELCOME_TEXT}
    >
      <ShieldIcon />
      <UndulatingFloorIcon />
    </EmptyState>
  )
}

export default ListHubsHOC(ListHubsStep1)

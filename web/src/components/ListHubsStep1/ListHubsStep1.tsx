import EmptyState from '../EmptyState/EmptyState'
import { ShieldIcon, UndulatingFloorIcon } from '../../utils/svgs'
import {
  LIST_HUB_CTA,
  LIST_HUB_WELCOME_TEXT,
  LIST_HUB_WELCOME_TITLE,
} from './presets'
import ListHubsHOC from '../HOC/listHubsHOC'
import Button from '../ListHubsStepButton/ListHubsStepButton'

const ListHubsStep1 = ({ onFormSubmit }) => {
  return (
    <EmptyState
      title={LIST_HUB_WELCOME_TITLE}
      description={LIST_HUB_WELCOME_TEXT}
    >
      <ShieldIcon />
      <UndulatingFloorIcon />
      <Button onClick={onFormSubmit} text={LIST_HUB_CTA} />
    </EmptyState>
  )
}

export default ListHubsHOC(ListHubsStep1)

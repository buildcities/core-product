import EmptyState from 'src/components/EmptyState'
import { ShieldIcon, UndulatingFloorIcon } from 'src/utils/svgs'
import {
  LIST_HUB_CTA,
  LIST_HUB_WELCOME_TEXT,
  LIST_HUB_WELCOME_TITLE,
} from './presets'
import ListHubsHOC from 'src/components/HOC/listHubsHOC'
import Button from 'src/components/ListHubs/ListHubsStepButton'

const ListHubsStep1 = ({ onFormSubmit }) => {
  return (
    <EmptyState
      title={LIST_HUB_WELCOME_TITLE}
      description={LIST_HUB_WELCOME_TEXT}
    >
      <ShieldIcon />

      <UndulatingFloorIcon className="w-[280px] md:w-[320px] lg:w-[464px] h-[129px]" />

      <Button onClick={onFormSubmit} text={LIST_HUB_CTA} />
    </EmptyState>
  )
}

export default ListHubsHOC(ListHubsStep1)

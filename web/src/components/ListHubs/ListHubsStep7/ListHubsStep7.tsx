import EmptyState from '../../EmptyState/EmptyState'
import { SpiralIcon } from '../../../utils/svgs'
import {
  LIST_HUB_EXIT_CTA,
  LIST_HUB_EXIT_TEXT,
  LIST_HUB_EXIT_TITLE,
} from './presets'
import { Button } from '@buildcities/build-ui.components.all'
import ListHubsHOC from '../../HOC/listHubsHOC'

const ListHubsStep7 = () => {
  const onClick = () => {
    //goto home page
  }
  return (
    <EmptyState title={LIST_HUB_EXIT_TITLE} description={LIST_HUB_EXIT_TEXT}>
      <SpiralIcon />
      <div className="mt-6 w-full">
        <Button onClick={onClick} text={LIST_HUB_EXIT_CTA} />
      </div>
    </EmptyState>
  )
}

export default ListHubsHOC(ListHubsStep7)

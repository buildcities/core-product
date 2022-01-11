import EmptyState from '../../EmptyState/EmptyState'
import { SpiralIcon } from '../../../utils/svgs'
import {
  LIST_HUB_EXIT_CTA,
  LIST_HUB_EXIT_TEXT,
  LIST_HUB_EXIT_TITLE,
} from './presets'
import { Button } from '@buildcities/build-ui.components.all'
import ListHubsHOC from '../../HOC/listHubsHOC'
import { routes, navigate } from '@redwoodjs/router'

const ListHubsStep7 = () => {
  const onClick = () => {
    navigate(routes.home())
  }
  return (
    <EmptyState title={LIST_HUB_EXIT_TITLE} description={LIST_HUB_EXIT_TEXT}>
      <SpiralIcon className="w-280px h-[150px] md:w-[320px] md:h-[220px] lg:w-[280px] lg:h-[247px]" />
      <div className="mt-6 w-full">
        <Button onClick={onClick} text={LIST_HUB_EXIT_CTA} />
      </div>
    </EmptyState>
  )
}

export default ListHubsHOC(ListHubsStep7)

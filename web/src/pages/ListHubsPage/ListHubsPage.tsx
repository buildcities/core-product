import { Steps } from '@buildcities/build-ui.ui.base.steps'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import { listHubsStepsAtom } from 'src/utils/store'
import { useAtomValue } from 'jotai/utils'
import ListHubsStep1 from 'src/components/ListHubsStep1/ListHubsStep1'
import ListHubsStep2 from 'src/components/ListHubsStep2/ListHubsStep2'

type ListHubsPageProps = {
  stepId?: number
}

const ListHubsPage = ({ stepId }: ListHubsPageProps) => {
  const hubSteps = useAtomValue(listHubsStepsAtom)
  return (
    <TwoColumnLayoutLayout
      metaTitle="List Hubs"
      sideBar={<Steps steps={hubSteps} />}
    >
      {!stepId && <ListHubsStep1 />}
      {stepId == 2 && <ListHubsStep2 />}
    </TwoColumnLayoutLayout>
  )
}

export default ListHubsPage

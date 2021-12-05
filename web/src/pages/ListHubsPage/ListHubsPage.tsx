import { Steps } from '@buildcities/build-ui.ui.base.steps'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import { useStore } from 'src/utils/stores/hubStepsStore'
import ListHubsStep1 from 'src/components/ListHubsStep1/ListHubsStep1'
import ListHubsStep2 from 'src/components/ListHubsStep2/ListHubsStep2'
import ListHubsStep3 from 'src/components/ListHubsStep3/ListHubsStep3'
import ListHubsStep4 from 'src/components/ListHubsStep4/ListHubsStep4'
import ListHubsStep5 from 'src/components/ListHubsStep5/ListHubsStep5'
import { useEffect } from 'react'

type ListHubsPageProps = {
  stepId?: number
}

const ListHubsPage = ({ stepId }: ListHubsPageProps) => {
  const hubSteps = useStore((state) => state.listHubsSteps)

  useEffect(() => {
    console.log('re-rendered')
    return () => {}
  }, [])

  return (
    <TwoColumnLayoutLayout
      metaTitle="List Hubs"
      sideBar={<Steps steps={hubSteps} />}
    >
      {(!stepId || stepId == 0) && <ListHubsStep1 stepId={stepId} />}
      {stepId == 1 && <ListHubsStep2 stepId={stepId} />}
      {stepId == 2 && <ListHubsStep3 stepId={stepId} />}
      {stepId == 3 && <ListHubsStep4 stepId={stepId} />}
      {stepId == 4 && <ListHubsStep5 stepId={stepId} />}
    </TwoColumnLayoutLayout>
  )
}

export default ListHubsPage

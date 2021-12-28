import { Steps } from '@buildcities/build-ui.ui.base.steps'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import { useStore } from 'src/utils/stores/hubStepsStore'
import ListHubsStep1 from 'src/components/ListHubs/ListHubsStep1/ListHubsStep1'
import ListHubsStep2 from 'src/components/ListHubs/ListHubsStep2/ListHubsStep2'
import ListHubsStep3 from 'src/components/ListHubs/ListHubsStep3/ListHubsStep3'
import ListHubsStep4 from 'src/components/ListHubs/ListHubsStep4/ListHubsStep4'
import ListHubsStep5 from 'src/components/ListHubs/ListHubsStep5/ListHubsStep5'
import ListHubsStep6 from 'src/components/ListHubs/ListHubsStep6/ListHubsStep6'
import ListHubsStep7 from 'src/components/ListHubs/ListHubsStep7/ListHubsStep7'
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
      <div className="mb-5">
        {(!stepId || stepId == 0) && <ListHubsStep1 stepId={stepId} />}
        {stepId == 1 && <ListHubsStep2 stepId={stepId} />}
        {stepId == 2 && <ListHubsStep3 stepId={stepId} />}
        {stepId == 3 && <ListHubsStep4 stepId={stepId} />}
        {stepId == 4 && <ListHubsStep5 stepId={stepId} />}
        {stepId == 5 && <ListHubsStep6 stepId={stepId} />}
        {stepId == 6 && <ListHubsStep7 stepId={stepId} />}
      </div>
    </TwoColumnLayoutLayout>
  )
}

export default ListHubsPage

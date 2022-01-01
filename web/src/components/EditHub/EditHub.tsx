/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStore } from 'src/utils/stores/hubStepsStore'
//import ListHubsStep1 from 'src/components/ListHubs/ListHubsStep1/ListHubsStep1'
import ListHubsStep2 from 'src/components/ListHubs/ListHubsStep2/ListHubsStep2'
import ListHubsStep3 from 'src/components/ListHubs/ListHubsStep3/ListHubsStep3'
import ListHubsStep4 from 'src/components/ListHubs/ListHubsStep4/ListHubsStep4'
import ListHubsStep5 from 'src/components/ListHubs/ListHubsStep5/ListHubsStep5'
import ListHubsStep6 from 'src/components/ListHubs/ListHubsStep6/ListHubsStep6'
import { useEffect } from 'react'
//import ListHubsStep7 from 'src/components/ListHubs/ListHubsStep7/ListHubsStep7'
//import { useEffect } from 'react'
type EditHubProps = {
  _stepId?: number
  data?: any
}

const EditHub = ({ _stepId, data }: EditHubProps) => {
  const { stepId, setStepsData, hubList } = useStore((state) => ({
    stepId: state.stepId,
    setStepsData: state.setStepsData,
    hubList: state.listHubsSteps,
  }))
  useEffect(() => {
    data && setStepsData(data as any)
  }, [data])

  return hubList[0]?.data?.name ? (
    <div className="mb-5">
      {(!stepId || stepId == 0) && <ListHubsStep2 stepId={stepId} />}
      {stepId == 1 && <ListHubsStep3 stepId={_stepId || stepId} />}
      {stepId == 2 && <ListHubsStep4 stepId={_stepId || stepId} />}
      {stepId == 3 && <ListHubsStep5 stepId={_stepId || stepId} />}
      {stepId == 4 && <ListHubsStep6 stepId={_stepId || stepId} />}
    </div>
  ) : (
    <></>
  )
}

export default EditHub

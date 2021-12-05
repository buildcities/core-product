import React, { useCallback, useEffect } from 'react'
import { useStore } from 'src/utils/stores/hubStepsStore'

export default (WrappedComponent: React.FC<any>) => {
  const HOCComponent = ({ stepId }: { stepId?: number }) => {
    const _stepId = stepId || 0
    const updateStepData = useStore((state) => state.updateStepData)

    const data = useStore(
      useCallback((state) => state.listHubsSteps[_stepId].data, [stepId])
    )
    useEffect(() => {
      updateStepData({ stepId: _stepId, status: 'current' })
      return () => {
        updateStepData({ stepId: _stepId, status: 'complete' })
      }
    }, [stepId])

    return <WrappedComponent {...{ data, stepId: _stepId, updateStepData }} />
  }

  HOCComponent.propTypes = {}

  return HOCComponent
}

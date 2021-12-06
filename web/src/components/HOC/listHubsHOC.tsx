/* eslint-disable react-hooks/exhaustive-deps */
import { navigate, routes } from '@redwoodjs/router'
import React, { useCallback, useEffect } from 'react'
import { useStore } from 'src/utils/stores/hubStepsStore'
import { TListHubsComponentProps } from 'src/utils/types'

export default (WrappedComponent: React.FC<TListHubsComponentProps>) => {
  const HOCComponent = ({ stepId }: { stepId?: number }) => {
    const _stepId = stepId || 0
    const updateStepData = useStore(
      useCallback((state) => state.updateStepData, [])
    )
    const getStepsData = useStore(
      useCallback((state) => state.getStepsData, [])
    )

    const onFormSubmit = useCallback(() => {
      if (_stepId == 5) {
        //upload to cloud repo here
        console.log(getStepsData())
      }
      navigate(routes.listHubs({ stepId: _stepId + 1 }))
    }, [_stepId])

    const data = useStore(
      useCallback((state) => state.listHubsSteps[_stepId].data, [_stepId])
    )
    useEffect(() => {
      updateStepData({ stepId: _stepId, status: 'current' })
      return () => {
        updateStepData({ stepId: _stepId, status: 'complete' })
      }
    }, [stepId])

    return (
      <WrappedComponent
        {...{ data, stepId: _stepId, updateStepData, onFormSubmit }}
      />
    )
  }

  HOCComponent.propTypes = {}

  return HOCComponent
}

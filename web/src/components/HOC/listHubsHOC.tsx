/* eslint-disable react-hooks/exhaustive-deps */
import { navigate, routes } from '@redwoodjs/router'
import React, { useCallback, useEffect } from 'react'
import { useStore } from 'src/utils/stores/hubStepsStore'
import { TListHubsComponentProps } from 'src/utils/types'
import { useMutation } from '@redwoodjs/web'
import { CREATE_HUB } from './mutation'
import { toast } from '@redwoodjs/web/toast'

export default (WrappedComponent: React.FC<TListHubsComponentProps>) => {
  const HOCComponent = ({ stepId }: { stepId?: number }) => {
    const _stepId = stepId || 0
    const updateStepData = useStore(
      useCallback((state) => state.updateStepData, [])
    )
    const getStepsData = useStore(
      useCallback((state) => state.getStepsData, [])
    )

    const setIsBusy = useStore(useCallback((state) => state.setIsBusy, []))

    const [create, { loading }] = useMutation(CREATE_HUB)

    const onFormSubmit = useCallback(() => {
      if (_stepId == 5) {
        //upload to cloud repo here at step 6
        toast.promise(create({ variables: { input: getStepsData() } }), {
          loading: 'loading',
          success: 'Hub successfully added!',
          error: 'Opps! Hub listing failed to post!',
        })
        //console.log(getStepsData())
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

    useEffect(() => {
      setIsBusy(loading)
      return () => {}
    }, [loading])

    return (
      <WrappedComponent
        {...{ data, stepId: _stepId, updateStepData, onFormSubmit }}
      />
    )
  }

  HOCComponent.propTypes = {}

  return HOCComponent
}

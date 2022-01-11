/* eslint-disable react-hooks/exhaustive-deps */
import { navigate, routes, useLocation, useParams } from '@redwoodjs/router'
import React, { useCallback, useEffect } from 'react'
import { useStore } from 'src/utils/stores/hubStepsStore'
//import { useStore as _editUseStore } from 'src/utils/stores/editHubStepsStore'
import { TListHubsComponentProps } from 'src/utils/types'
import { useMutation } from '@redwoodjs/web'
import { CREATE_HUB, UPDATE_HUB } from './mutation'
import { toast } from '@redwoodjs/web/toast'
import { getUserId } from 'src/utils/functions'
import { useAuth } from '@redwoodjs/auth'

export default (WrappedComponent: React.FC<TListHubsComponentProps>) => {
  const HOCComponent = ({ stepId }: { stepId?: number }) => {
    const { pathname } = useLocation()

    const { id } = useParams()

    const isEditMode = pathname?.match('edit-hub')?.length

    const _stepId = stepId || 0
    const updateStepData = useStore(
      useCallback((state) => state.updateStepData, [])
    )
    const getStepsData = useStore(
      useCallback((state) => state.getStepsData, [])
    )

    const setIsBusy = useStore(useCallback((state) => state.setIsBusy, []))

    const data = useStore(
      useCallback((state) => state.listHubsSteps[_stepId].data, [_stepId])
    )

    const { userMetadata } = useAuth()

    const [create, { loading }] = useMutation(
      isEditMode ? UPDATE_HUB : CREATE_HUB
    )

    useEffect(() => {
      updateStepData({ stepId: _stepId, status: 'current' })
      return () => {
        updateStepData({ stepId: _stepId, status: 'complete' })
      }
    }, [])

    useEffect(() => {
      setIsBusy(loading)
      return () => {}
    }, [loading])

    const onFormSubmit = useCallback(() => {
      let variables
      switch (true) {
        case _stepId == 5 && !isEditMode:
          variables = { input: getStepsData(getUserId(userMetadata)) }
          break
        case _stepId == 4 && isEditMode > 0:
          variables = { input: getStepsData(getUserId(userMetadata)), id }
          break
      }
      if (variables) {
        toast.promise(
          create({
            variables,
          }),
          {
            loading: 'loading',
            success: 'Hub successfully added!',
            error: 'Oops! Hub listing failed to post!',
          }
        )
      }

      isEditMode
        ? updateStepData({ stepId: _stepId + 1 })
        : navigate(routes.listHubs({ stepId: _stepId + 1 }))
    }, [_stepId])

    return (
      <WrappedComponent
        {...{ data, stepId: _stepId, updateStepData, onFormSubmit }}
      />
    )
  }

  HOCComponent.propTypes = {}

  return HOCComponent
}

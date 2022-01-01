/* eslint-disable react-hooks/exhaustive-deps */
import { Steps } from '@buildcities/build-ui.components.all'
import React, { useEffect } from 'react'
import EditHubCell from 'src/components/EditHubCell'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import { useStore } from 'src/utils/stores/hubStepsStore'

function EditHubPage({ id }) {
  const { hubSteps, prepareStepsForEdit } = useStore((store) => ({
    hubSteps: store.listHubsSteps,
    prepareStepsForEdit: store.prepareStepsForEdit,
    reset: store.reset,
  }))
  useEffect(() => {
    prepareStepsForEdit()
    return () => {
      //console.log('i have left')
      //reset(true)
    }
  }, [])
  return (
    <TwoColumnLayoutLayout sideBar={<Steps steps={hubSteps} />}>
      <EditHubCell id={id} />
    </TwoColumnLayoutLayout>
  )
}

export default EditHubPage

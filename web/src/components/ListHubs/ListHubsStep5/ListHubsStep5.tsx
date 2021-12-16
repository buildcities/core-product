import { Form, useForm } from '@redwoodjs/forms'
import React from 'react'
import { TListHubsComponentProps } from 'src/utils/types'
import FormSection from '../../FormSection/FormSection'
import ListHubsHOC from '../../HOC/listHubsHOC'
import Button from '../ListHubsStepButton/ListHubsStepButton'
import HubListDateSelector from '../../HubListDateSelector/HubListDateSelector'

import {
  AVAILABILITY_SECTION_TEXT,
  AVAILABILITY_SECTION_TITLE,
  daysOfWeek,
} from './presets'

const ListHubsStep5 = ({
  stepId,
  data,
  updateStepData,
  onFormSubmit,
}: TListHubsComponentProps) => {
  const formMethods = useForm({ defaultValues: data })

  const onSubmit = (data) => {
    console.log(data)
    updateStepData({ data, stepId })
    onFormSubmit && onFormSubmit()
  }
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="space-y-2 sm:w-auto max-w-[660px] md:pr-0 pr-4 w-screen"
    >
      <FormSection
        description={AVAILABILITY_SECTION_TEXT}
        title={AVAILABILITY_SECTION_TITLE}
      >
        <HubListDateSelector daysOfWeek={daysOfWeek} />
      </FormSection>
      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep5)

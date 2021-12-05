import { Button, RadioControls } from '@buildcities/build-ui.components.all'
import { Form, useForm } from '@redwoodjs/forms'
import React from 'react'
import { TListHubsComponentProps } from 'src/utils/types'
import ControlledInput from '../ControlledInput/ControlledInput'
import FormSection from '../FormSection/FormSection'
import ListHubsHOC from '../HOC/listHubsHOC'
import {
  AVAILABILITY_SECTION_TEXT,
  AVAILABILITY_SECTION_TITLE,
  radioOptions,
} from './presets'

const ListHubsStep5 = ({
  stepId,
  data,
  updateStepData,
}: TListHubsComponentProps) => {
  const formMethods = useForm({ defaultValues: data })

  const onSubmit = (data) => {
    updateStepData({ data, stepId })
  }
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="space-y-2 w-auto max-w-[632px] ml-[120px]"
    >
      <FormSection
        description={AVAILABILITY_SECTION_TEXT}
        title={AVAILABILITY_SECTION_TITLE}
      >
        <ControlledInput name="availability">
          {(inputProps) => {
            return (
              <RadioControls.RadioGroup inputProps={inputProps}>
                {radioOptions.map(RadioControls.RadioOption)}
              </RadioControls.RadioGroup>
            )
          }}
        </ControlledInput>
      </FormSection>
      <div className="mt-6">
        <Button type="submit" text="Next" />
      </div>
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep5)

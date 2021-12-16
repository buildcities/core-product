import { Form, TextAreaField, useForm } from '@redwoodjs/forms'
import React from 'react'
import SelectButtons from '../../SelectButtons/SelectButtons'
import FormSection from '../../FormSection/FormSection'
import { TextInputArea } from '@buildcities/build-ui.components.all'
import ListHubsHOC from '../../HOC/listHubsHOC'
import {
  RULES_SECTION_TITLE,
  RULES_SECTION_TEXT,
  CUSTOM_RULES_SECTION_TEXT,
  CUSTOM_RULES_SECTION_TITLE,
  selectOptions,
} from './presets'
import Button from '../ListHubsStepButton/ListHubsStepButton'

const ListHubsStep6 = ({ data, stepId, updateStepData, onFormSubmit }) => {
  const formMethods = useForm({ defaultValues: data })

  const onSubmit = (data) => {
    updateStepData({ data, stepId })
    onFormSubmit && onFormSubmit()
  }
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="space-y-2 w-auto max-w-[660px]"
    >
      <FormSection description={RULES_SECTION_TEXT} title={RULES_SECTION_TITLE}>
        <SelectButtons
          label=" "
          className="mb-4"
          selectProps={selectOptions}
          name="rules.default"
        />
      </FormSection>
      <FormSection
        description={CUSTOM_RULES_SECTION_TEXT}
        title={CUSTOM_RULES_SECTION_TITLE}
      >
        <TextInputArea name="rules.custom" as={TextAreaField} />
      </FormSection>

      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep6)

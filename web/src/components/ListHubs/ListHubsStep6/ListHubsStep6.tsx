import { Form, HiddenField, TextAreaField, useForm } from '@redwoodjs/forms'
import React from 'react'
import FormSection from '../../FormSection/FormSection'
import { TextInputArea, Paragraph } from '@buildcities/build-ui.components.all'
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
    console.log(data)
    updateStepData({ data, stepId })
    onFormSubmit && onFormSubmit()
  }
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="space-y-2 w-full max-w-[660px]"
    >
      <FormSection description={RULES_SECTION_TEXT} title={RULES_SECTION_TITLE}>
        <div className="space-y-4">
          {selectOptions.map((option, index) => (
            <div
              key={index}
              className="border s p-3 border-selected rounded-lg w-full bg-cardBackground"
            >
              <Paragraph
                type="P2"
                className="text-mainText"
                text={option.label}
              />
              <HiddenField
                defaultValue={option.label}
                name={`rules.default.${index}`}
              />
            </div>
          ))}
        </div>
      </FormSection>
      <FormSection
        description={CUSTOM_RULES_SECTION_TEXT}
        title={CUSTOM_RULES_SECTION_TITLE}
      >
        <TextInputArea defaultValue="" name="rules.custom" as={TextAreaField} />
      </FormSection>

      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep6)

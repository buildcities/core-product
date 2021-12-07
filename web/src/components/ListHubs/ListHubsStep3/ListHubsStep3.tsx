import FormSection from '../../FormSection/FormSection'

import { Form, useForm } from '@redwoodjs/forms'
import SelectButtons from '../../SelectButtons/SelectButtons'
import {
  AMENITIES_SECTION_TEXT,
  AMENITIES_SECTION_TITLE,
  amenities,
  ADD_AMENITIES_SECTION_TITLE,
  ADD_AMENITIES_SECTION_TEXT,
} from './presets'
import { TListHubsComponentProps } from 'src/utils/types'
import ListHubsHOC from '../../HOC/listHubsHOC'
import Button from '../ListHubsStepButton/ListHubsStepButton'

const ListHubsStep3 = ({
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
      className="space-y-2 w-auto max-w-[564px] ml-[120px]"
    >
      <FormSection
        description={AMENITIES_SECTION_TEXT}
        title={AMENITIES_SECTION_TITLE}
      >
        <>
          <SelectButtons
            className="mb-4"
            label="Drinks and snacks"
            selectProps={amenities.refreshments}
            name="amenities.refreshments"
          />
          <SelectButtons
            className="mb-4"
            label="Tech"
            selectProps={amenities.tech}
            name="amenities.tech"
          />
          <SelectButtons
            className="mb-4"
            label="Furniture"
            selectProps={amenities.furniture}
            name="amenities.furniture"
          />
          <SelectButtons
            className="mb-4"
            label="Other"
            selectProps={amenities.other}
            name="amenities.other"
          />
        </>
      </FormSection>
      <FormSection
        description={ADD_AMENITIES_SECTION_TEXT}
        title={ADD_AMENITIES_SECTION_TITLE}
      ></FormSection>
      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep3)

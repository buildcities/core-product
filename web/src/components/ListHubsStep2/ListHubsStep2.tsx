import { Form, NumberField } from '@redwoodjs/forms'
import FormSection from '../FormSection/FormSection'
import {
  GoogleAddressAutocomplete,
  SelectInput,
  TextInput,
  Button,
} from '@buildcities/build-ui.components.all'

import {
  hubTypes,
  HUB_TYPE_SECTION_TEXT,
  HUB_TYPE_SECTION_TITLE,
  LOCATION_SECTION_TEXT,
  LOCATION_SECTION_TITLE,
} from './presets'
import FormField from '../FormField/FormField'

const ListHubsStep2 = () => {
  return (
    <Form className="max-w-[391px]">
      <FormSection
        description={LOCATION_SECTION_TEXT}
        title={LOCATION_SECTION_TITLE}
      >
        <GoogleAddressAutocomplete name="location" />
      </FormSection>
      <FormSection
        title={HUB_TYPE_SECTION_TITLE}
        description={HUB_TYPE_SECTION_TEXT}
      >
        <FormField label="Estate" name={'type.estate'}>
          <SelectInput name="type.estate" options={hubTypes} />
        </FormField>
        <FormField label="Available seats" name={'type.seats'}>
          <TextInput
            inputProps={{ defaultValue: 5 }}
            as={NumberField as any}
            name="type.seats"
          />
        </FormField>
      </FormSection>
      <div className="mt-8">
        <Button type="submit" text="Next" />
      </div>
    </Form>
  )
}

export default ListHubsStep2

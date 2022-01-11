import { Form, TextField, useForm } from '@redwoodjs/forms'
import {
  SelectInput,
  TextInput,
  PageSection,
} from '@buildcities/build-ui.components.all'
import Button from '../ListHubsStepButton/ListHubsStepButton'
import { GoogleAddressAutocomplete } from 'src/components/bit.dev/google-address-autocomplete/google-address-autocomplete'
import {
  hubTypes,
  HUB_TYPE_SECTION_TEXT,
  HUB_TYPE_SECTION_TITLE,
  HUB_NAME_SECTION_TEXT,
  HUB_NAME_SECTION_TITLE,
  LOCATION_SECTION_TEXT,
  LOCATION_SECTION_TITLE,
} from './presets'
import FormField from '../../FormField/FormField'
import ControlledInput from '../../ControlledInput/ControlledInput'
import { TListHubsComponentProps } from 'src/utils/types'
import ListHubsHOC from '../../HOC/listHubsHOC'

const ListHubsStep2 = ({
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
      className="max-w-[391px] w-auto"
    >
      <PageSection
        description={LOCATION_SECTION_TEXT}
        title={LOCATION_SECTION_TITLE}
      >
        <FormField label="Location" name={'location'}>
          <ControlledInput rules={{ required: true }} name="location">
            {(inputProps) => (
              <GoogleAddressAutocomplete
                apiKey={process.env.G_PLACES_API_KEY}
                inputProps={inputProps}
                defaultValue={{ title: '' }}
              />
            )}
          </ControlledInput>
        </FormField>
      </PageSection>
      <PageSection
        description={HUB_NAME_SECTION_TEXT}
        title={HUB_NAME_SECTION_TITLE}
      >
        <FormField label="Hub name" name={'name'}>
          <TextInput
            inputProps={{
              placeholder: 'Type your fancy name',
              validation: { required: true },
            }}
            as={TextField}
            name="name"
          />
        </FormField>
      </PageSection>
      <PageSection
        title={HUB_TYPE_SECTION_TITLE}
        description={HUB_TYPE_SECTION_TEXT}
      >
        <>
          <FormField className="mb-4" label="Estate" name={'type.estate'}>
            <ControlledInput
              defaultValue={hubTypes[0].value}
              rules={{ required: true }}
              name="type.estate"
            >
              {(inputProps) => (
                <SelectInput options={hubTypes} inputProps={inputProps} />
              )}
            </ControlledInput>
          </FormField>
          <FormField label="Available seats" name={'type.seats'}>
            <TextInput
              inputProps={{ placeholder: 5, validation: { required: true } }}
              as={TextField}
              name="type.seats"
            />
          </FormField>
        </>
      </PageSection>
      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep2)

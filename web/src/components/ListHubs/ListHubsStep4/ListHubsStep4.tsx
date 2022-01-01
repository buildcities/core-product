import { TextInputArea } from '@buildcities/build-ui.components.all'
import { Form, useForm, TextAreaField } from '@redwoodjs/forms'
import ControlledInput from '../../ControlledInput/ControlledInput'
import FormSection from '../../FormSection/FormSection'
import {
  DESCRIPTION_SECTION_TEXT,
  DESCRIPTION_SECTION_TITLE,
  PHOTOS_SECTION_TEXT,
  PHOTOS_SECTION_TITLE,
} from './presets'
import ListHubsHOC from '../../HOC/listHubsHOC'
import { TListHubsComponentProps } from 'src/utils/types'
import Button from '../ListHubsStepButton/ListHubsStepButton'
import { ImagePicker } from 'src/components/bit.dev/image-picker'
import { useAuth } from '@redwoodjs/auth'
import { useStore } from 'src/utils/stores/hubStepsStore'
import { camelCase } from 'lodash'
import FormField from 'src/components/FormField/FormField'
const storeSelector = (store) => store.getCurrentHubName
const ListHubsStep4 = ({
  stepId,
  data,
  updateStepData,
  onFormSubmit,
}: TListHubsComponentProps) => {
  //Todo: get user-context for cloudstore picture folder
  const formMethods = useForm({ defaultValues: data })
  const { userMetadata } = useAuth()
  const getCurrentHubName = useStore(storeSelector)
  const hubName = camelCase(getCurrentHubName())
  const folderPath = `${process.env.IMAGE_PICKER_ROOT_FOLDER}/${userMetadata?.email}/${hubName}`
  console.log(folderPath)
  const onSubmit = (data) => {
    updateStepData({ data, stepId })
    onFormSubmit && onFormSubmit()
  }
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className="space-y-2 w-auto max-w-[513px]"
    >
      <FormSection
        description={PHOTOS_SECTION_TEXT}
        title={PHOTOS_SECTION_TITLE}
      >
        <FormField label="" name={'images'}>
          <ControlledInput rules={{ required: true }} name="images">
            {(inputProps) => (
              <ImagePicker
                firebaseConfigOptions={{
                  apiKey: process.env.FB_API_KEY,
                  appId: process.env.FB_APP_ID,
                  authDomain: process.env.FB_AUTH_DOMAIN,
                  projectId: process.env.FB_PROJECT_ID,
                  storageBucket: process.env.FB_STORAGE_BUCKET,
                }}
                images={[]}
                folderPath={folderPath}
                inputProps={inputProps}
              />
            )}
          </ControlledInput>
        </FormField>
      </FormSection>
      <FormSection
        description={DESCRIPTION_SECTION_TEXT}
        title={DESCRIPTION_SECTION_TITLE}
      >
        <TextInputArea
          as={TextAreaField}
          name="description"
          defaultValue="1500-character limit"
        />
      </FormSection>
      <Button text="Next" />
    </Form>
  )
}

export default ListHubsHOC(ListHubsStep4)

import { Form, useFieldArray, useForm } from '@redwoodjs/forms'
import {
  AMENITIES_SECTION_TEXT,
  AMENITIES_SECTION_TITLE,
  amenities,
} from './presets'
import { TListHubsComponentProps } from 'src/utils/types'
import ListHubsHOC from '../../HOC/listHubsHOC'
import {
  PageSection,
  Button as SecondaryButton,
} from '@buildcities/build-ui.components.all'
import { GroupedAmenities } from './components/grouped-amenities'
import { CustomAmenities } from './components/custom-amenities'
import { isEmpty } from 'lodash'
import Button from '../ListHubsStepButton/ListHubsStepButton'

const CUSTOM_AMENITIES_NAME = 'amenities.custom'

const ListHubsStep3 = ({
  stepId,
  data,
  updateStepData,
  onFormSubmit,
}: TListHubsComponentProps) => {
  const formMethods = useForm({ defaultValues: data })
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: CUSTOM_AMENITIES_NAME as never,
  })

  const onSubmit = (data) => {
    console.log(data)
    updateStepData({ data, stepId })
    onFormSubmit && onFormSubmit()
  }
  const onClick = () => {
    const label = prompt('Create your new custom feature!', '')
    if (!isEmpty(label)) {
      append({ label })
    }
  }

  const onDelete = (index: number) => {
    remove(index)
  }

  return (
    <>
      <Form
        formMethods={formMethods}
        onSubmit={onSubmit}
        className="space-y-2 w-auto max-w-[564px] "
      >
        <PageSection
          description={AMENITIES_SECTION_TEXT}
          title={AMENITIES_SECTION_TITLE}
        >
          <>
            <GroupedAmenities
              className="mb-4"
              label="Drinks and snacks"
              amenities={amenities.refreshments}
              name="amenities.refreshments"
              cardProps={{ icon: 'pizza', text: '', isActive: false }}
            />
            <GroupedAmenities
              className="mb-4"
              label="Tech"
              amenities={amenities.tech}
              name="amenities.tech"
              cardProps={{ icon: 'desktop', text: '', isActive: false }}
            />
            <GroupedAmenities
              className="mb-4"
              label="Furniture"
              amenities={amenities.furniture}
              name="amenities.furniture"
              cardProps={{ icon: 'bed', text: '', isActive: false }}
            />
            <GroupedAmenities
              className="mb-4 relative"
              label="Other amenities"
              amenities={amenities.other}
              name="amenities.other"
              cardProps={{ icon: 'paw', text: '', isActive: false }}
            >
              <CustomAmenities
                onDelete={onDelete}
                fields={fields}
                name={CUSTOM_AMENITIES_NAME}
              />
              <div className="absolute top-5 right-4">
                <SecondaryButton
                  onClick={onClick}
                  style="secondary"
                  text="Add amenities"
                  type="button"
                />
              </div>
            </GroupedAmenities>
          </>
        </PageSection>
        <Button text="Next" />
      </Form>
    </>
  )
}

export default ListHubsHOC(ListHubsStep3)

import HubListDateSelector from './HubListDateSelector'
import { Form } from '@redwoodjs/forms'

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const generated = () => {
  return (
    <Form>
      <HubListDateSelector daysOfWeek={daysOfWeek} />
    </Form>
  )
}

export default { title: 'Components/HubListDateSelector' }

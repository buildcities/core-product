import { PageSection } from 'src/components/bit.dev/page-section'
import { NOTE_SECTION_TEXT, NOTE_SECTION_TITLE } from './presets'
import { TextAreaField, Form } from '@redwoodjs/forms'
import ReservationButtons from './reservation-buttons'

type LeaveNoteSectionProps = {
  onClickConfirm?: () => void
  onClickContact?: () => void
}

export default function LeaveNoteSection({
  onClickConfirm,
  onClickContact,
}: LeaveNoteSectionProps) {
  return (
    <Form>
      <PageSection description={NOTE_SECTION_TEXT} title={NOTE_SECTION_TITLE}>
        <TextAreaField
          className="rounded-lg lg:h-24 border-dashed border-2 border-outline bg-cardBackground w-full h-40 p-4 mt-4 flex items-center text-paragraph"
          name="note"
        />
      </PageSection>
      <ReservationButtons
        onClickContact={onClickContact}
        onClickConfirm={onClickConfirm}
      />
    </Form>
  )
}

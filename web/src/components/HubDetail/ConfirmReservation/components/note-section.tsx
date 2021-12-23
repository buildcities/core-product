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
/* <div className="mb-6">
      <span className="block md:text-3xl text-2xl font-sans font-medium text-paragraph md:mb-1 mb-2">
        Leave note
      </span>
      <small className="text-sm text-paragraph font-medium">
        If you didn’t find right rules that suits you, feel free to type your
        own that build_citizens have to respect.
      </small>
      <textarea
        placeholder="Your note here"
        className="rounded-lg border-dashed border-2 border-gray-800 bg-cardBackground w-full h-24 p-4 mt-4 flex items-center text-paragraph"
      ></textarea>
    </div> */

import { Button } from '@buildcities/build-ui.components.all'
type ReservationButtonProps = {
  onClickConfirm?: () => void
  onClickContact?: () => void
}
// export default function ReservationButton({ link }: ReservationButtonProps) {
export default function ReservationButton({
  onClickConfirm,
  onClickContact,
}: ReservationButtonProps) {
  return (
    <div className="flex space-x-5">
      <Button
        type="button"
        onClick={onClickContact}
        text="Contact owner"
        style="secondary"
      />
      <Button
        type="submit"
        onClick={onClickConfirm}
        text="Continue"
        style="primary"
      />
    </div>
  )
}

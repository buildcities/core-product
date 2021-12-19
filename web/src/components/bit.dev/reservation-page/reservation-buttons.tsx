import { Button } from '@buildcities/build-ui.components.all'
// type ReservationButtonProps = {
//   link: string
// }
// export default function ReservationButton({ link }: ReservationButtonProps) {
export default function ReservationButton() {
  return (
    <div className="flex">
      <Button text="Contact owner" style="secondary" />
      {/* Add in spacer as I can't edit the button styles
                  - adding margin breaks the borders */}
      <span className="w-10"></span>
      <Button text="Continue" style="primary" />
    </div>
  )
}

import { Button } from '@buildcities/build-ui.components.all'
const ListHubsStepButton = ({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}) => {
  return (
    <div className="mt-6 mb-10 w-full sm:max-w-none max-w-11/12">
      <Button onClick={onClick} type="submit" text={text} />
    </div>
  )
}

ListHubsStepButton.defaultProps = {
  text: 'Next',
}

export default ListHubsStepButton

import { Heading, Paragraph } from '@buildcities/build-ui.components.all'

type TEmptyStateProps = {
  title: string
  description?: string
  onClick?: () => void
}

const EmptyState: React.FC<TEmptyStateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className=" flex flex-1 flex-col items-center">
      <Heading type="H3" className="text-mainText flex-shrink" text={title} />
      <Paragraph
        className="mb-6 text-mainText text-center flex-shrink"
        text={description}
      />

      {children}
    </div>
  )
}

export default EmptyState

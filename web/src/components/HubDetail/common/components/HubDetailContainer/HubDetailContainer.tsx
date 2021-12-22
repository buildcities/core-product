import HubDetailHeader from '../HubDetailHeader/HubDetailHeader'

type HubDetailContainerProps = {
  children?: React.ReactNode
  title?: string
  subTitle?: string
  renderRight?: () => React.ReactElement
}

const HubDetailContainer = ({
  children,
  subTitle,
  title,
  renderRight,
}: HubDetailContainerProps) => {
  return (
    <>
      <HubDetailHeader
        containerClass="text-mainText"
        subTitle={subTitle}
        title={title}
      />
      <div className="flex flex-shrink flex-col lg:flex-row lg:justify-end lg:space-x-10 text-mainText">
        {children}
        <div className="flex-shrink h-max lg:max-w-[372px] mt-4 lg:mt-0 ">
          {renderRight && renderRight()}
        </div>
      </div>
    </>
  )
}
export default HubDetailContainer

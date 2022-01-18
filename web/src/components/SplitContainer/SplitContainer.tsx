import Header from './components/header'

type SplitContainerProps = {
  children?: React.ReactNode
  title?: string
  subTitle?: string
  renderRight?: () => React.ReactElement
}

const SplitContainer = ({
  children,
  subTitle,
  title,
  renderRight,
}: SplitContainerProps) => {
  return (
    <>
      <Header
        containerClass="text-mainText"
        subTitle={subTitle}
        title={title}
      />
      <div className="flex flex-shrink flex-col lg:flex-row lg:justify-end lg:space-x-5 text-mainText">
        {children}
        <div className="flex-shrink h-max lg:max-w-[374px] w-full mt-4 lg:mt-0 ">
          {renderRight && renderRight()}
        </div>
      </div>
    </>
  )
}
export default SplitContainer

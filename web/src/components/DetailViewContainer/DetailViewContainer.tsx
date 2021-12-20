import Header from './components/header'

type DetailViewContainerProps = {
  children?: React.ReactNode
  title?: string
  subTitle?: string
  renderRight: () => React.ReactElement
  metaTitle: string
  metaDescription?: string
}

const DetailViewContainer = ({
  children,
  subTitle,
  title,
  renderRight,
}: DetailViewContainerProps) => {
  return (
    <>
      <Header type="H1" subTitle={subTitle} title={title} />
      <div className="flex flex-shrink flex-col lg:flex-row lg:justify-end lg:space-x-10 text-mainText">
        <div>
          <Header type="H1" subTitle={subTitle} title={title} />
          {children}
        </div>
        <div className="flex-shrink h-max lg:max-w-[372px] mt-4 lg:mt-0 ">
          {renderRight && renderRight()}
        </div>
      </div>
    </>
  )
}
export default DetailViewContainer

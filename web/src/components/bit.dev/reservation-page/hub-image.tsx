type HubImageProps = {
  hubImage: string
  altText: string
}
export default function HubImage({ hubImage, altText }: HubImageProps) {
  return (
    <div className="xl:w-max xl:mx-0 sm:w-full mx-auto rounded-lg overflow-hidden">
      <img
        src={hubImage}
        className="xl:h-full xl:w-auto w-full rounded-lg"
        alt={altText}
      />
    </div>
  )
}

type HubImageProps = {
  hubImage: string
  altText: string
}
export default function HubImage({ hubImage, altText }: HubImageProps) {
  return (
    <div className="flex-shrink">
      <img src={hubImage} className="aspect-square rounded-lg" alt={altText} />
    </div>
  )
}

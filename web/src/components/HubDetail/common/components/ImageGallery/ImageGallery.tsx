/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/bookReservationStore'
import HubDetailHeader from '../HubDetailHeader/HubDetailHeader'
type ImageGalleryProps = {
  images?: { imageURL: string }[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const selectedHub = useStore((store) => store.selectedHub)
  const _images = (selectedHub?.images as any) || images
  return _images?.length ? (
    <>
      <HubDetailHeader
        subTitle={selectedHub?.location?.country as string}
        title={selectedHub?.name}
      />
      <div
        className={classNames(
          'grid  gap-4 ',
          _images.length < 2 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
        )}
      >
        {_images.map((item, key) => (
          <div key={key}>
            <img
              className="image-cover rounded-lg w-full h-full"
              alt=""
              src={item.dataURL}
            />
          </div>
        ))}
      </div>
    </>
  ) : (
    <></>
  )
}

export default ImageGallery

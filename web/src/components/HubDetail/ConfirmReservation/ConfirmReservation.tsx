import HubDetailContainer from '../common/components/HubDetailContainer/HubDetailContainer'
import {
  DateSection,
  QRCodeSection,
  LeaveNoteSection,
  HubImage,
} from './components'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { DATE_FORMAT } from '../common/preset'

type ConfirmReservationProps = {
  onQRDownload?: () => void
  name?: string
  location?: string
  image?: string
}

const ConfirmReservation = ({
  name,
  location,
  image,
  onQRDownload,
}: ConfirmReservationProps) => {
  const { checkInDate, checkOutDate, selectedHub } = useStore((store) => ({
    ...store,
  }))
  const _image = selectedHub?.images[0]['dataURL'] || image
  return (
    <>
      <HubDetailContainer
        subTitle={(selectedHub?.location?.city as string) || location}
        title={selectedHub?.name || name}
        renderRight={() => (
          <>
            <DateSection
              checkInDate={checkInDate.format(DATE_FORMAT)}
              checkOutDate={checkOutDate.format(DATE_FORMAT)}
            />
            <QRCodeSection onQRDownload={onQRDownload} code="test code" />
            <LeaveNoteSection />
          </>
        )}
      >
        <HubImage altText={name || name} hubImage={_image} />
      </HubDetailContainer>
    </>
  )
}

export default ConfirmReservation

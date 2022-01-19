/* eslint-disable react-hooks/exhaustive-deps */
import { Booker } from './components/booker'
import { Confirmer } from './components/confirmer'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

interface WidgetProps {
  type?: 'confirm' | 'book'
  bookingMode?: 'edit' | 'create'
  id?: string | number
}

interface BookingWidgetProps extends WidgetProps {}

const Widget = ({ bookingMode, id, type,userName }: WidgetProps) => {
  return type == 'book' ? (
    <Booker id={id} editMode={bookingMode == 'edit'} />
  ) : (
    <Confirmer id={id} />
  )
}

export default function BookingWidget(props: BookingWidgetProps) {
  return (
    <ConnectWallet>
      <Widget {...props} />
    </ConnectWallet>
  )
}

import { Booker } from './components/booker'
import { Confirmer } from './components/confirmer'
import { useMoralis } from 'react-moralis'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import { useEffect } from 'react'

interface WidgetProps {
  type?: 'confirm' | 'book'
  bookingMode?: 'edit' | 'create'
  id?: string | number
}

interface BookingWidgetProps extends WidgetProps {}

const Widget = ({ bookingMode, id, type }: WidgetProps) => {
  return type == 'book' ? (
    <Booker id={id} editMode={bookingMode == 'edit'} />
  ) : (
    <Confirmer id={id} />
  )
}

export default function BookingWidget(props: BookingWidgetProps) {
  const { isAuthenticated, authenticate } = useMoralis()
  useEffect(() => {
    //logout()
    return () => {}
  }, [])
  return isAuthenticated ? (
    <Widget {...props} />
  ) : (
    <ConnectWallet
      onWeb3Authenticate={() =>
        authenticate({ signingMessage: 'Build_ Authentication' })
      }
    />
  )
}

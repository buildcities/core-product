import { Booker } from './components/booker'
import { Confirmer } from './components/confirmer'
import { useMoralis, useNFTBalances } from 'react-moralis'
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
  const { isAuthenticated, authenticate, isWeb3Enabled, enableWeb3 } =
    useMoralis()
  const { getNFTBalances, data } = useNFTBalances()
  useEffect(() => {
    //logout()
    if (isAuthenticated && isWeb3Enabled) {
      // console.log('hello')
      getNFTBalances({ params: { chain: '0x4' } }).then((res) => {
        console.log(res)
      })
    }
    console.log(data)
    return () => {}
  }, [data, enableWeb3, getNFTBalances, isAuthenticated])
  return isAuthenticated && isWeb3Enabled ? (
    <Widget {...props} />
  ) : (
    <ConnectWallet
      onWeb3Authenticate={() =>
        authenticate({ signingMessage: 'Welcome To Build_' })
      }
    />
  )
}

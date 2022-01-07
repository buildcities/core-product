import { Button, Heading } from '@buildcities/build-ui.components.all'
import { HeyIcon } from 'src/utils/svgs'
import { CONNECT_WALLET_CTA, CONNECT_WALLET_TEXT } from './presets'

type ConnectWalletProps = {
  onWeb3Authenticate?: () => void
}

const ConnectWallet = ({ onWeb3Authenticate }: ConnectWalletProps) => {
  return (
    <div className="bg-cardBackground rounded-lg py-6 px-[33px] space-x-4 flex flex-col justify-center items-center">
      <HeyIcon containerClass="pb-4" />
      <Heading
        type="H5"
        className="text-center pb-[18px]"
        text={CONNECT_WALLET_TEXT}
      />
      <Button onClick={onWeb3Authenticate} text={CONNECT_WALLET_CTA} />
    </div>
  )
}

export default ConnectWallet

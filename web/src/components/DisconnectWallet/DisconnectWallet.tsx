import { Paragraph } from '@buildcities/build-ui.components.all'
import { useMoralis } from 'react-moralis'
import { useStore } from 'src/utils/stores/nftStore'

const LOGOUT_TEXT = 'Disconnect wallet'

const DisconnectWallet = () => {
  const clearNFTStore = useStore((s) => s.clearNFTStore)
  const _logOut = () => {
    logout().then(() => {
      clearNFTStore()
    })
  }
  const { logout, isAuthenticated } = useMoralis()
  return (
    isAuthenticated && (
      <button
        className="px-4 py-2 hover:text-selected text-mainText-lighter"
        onClick={_logOut}
      >
        <Paragraph text={LOGOUT_TEXT} />
      </button>
    )
  )
}

export default DisconnectWallet

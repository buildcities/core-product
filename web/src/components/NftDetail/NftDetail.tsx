import { Heading } from '@buildcities/build-ui.components.all'
import { useStore } from 'src/utils/stores/nftStore'
import { useStore as useAuth } from 'src/utils/stores/authStore'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

const IPFSToHttps = (payload: string) =>
  payload && payload.replace('ipfs://', 'https://ipfs.io/')

const NftDetail = () => {
  const metaData = useStore((s) => s.metaData)
  const { userName, picture } = useAuth((s) => s)

  return (
    <ConnectWallet>
      <div className="space-y-2 max-w-sm ">
        <div className="truncate w-full">
          <Heading type="H3" text={metaData?.name || 'Details'} />
        </div>
        <div className="bg-cardBackground w-full flex justify-center p-8 rounded-lg">
          {metaData?.image ? (
            <img
              alt={metaData?.name}
              className="object-cover"
              src={IPFSToHttps(metaData?.image)}
            />
          ) : (
            <img alt={userName} className="object-cover" src={picture} />
          )}
        </div>
        <div className="p-6  justify-between border border-[##343434] w-full rounded-lg truncate">
          <Heading type="H5" text={metaData?.description || userName} />
        </div>
      </div>
    </ConnectWallet>
  )
}

export default NftDetail

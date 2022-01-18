import { Heading } from '@buildcities/build-ui.components.all'
import { useStore } from 'src/utils/stores/nftStore'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

const IPFSToHttps = (payload: string) =>
  payload && payload.replace('ipfs://', 'https://ipfs.io/')

const NftDetail = () => {
  const metaData = useStore((s) => s.metaData)

  return (
    <ConnectWallet>
      <div className="space-y-5 max-w-sm ">
        <div className="truncate w-full">
          <Heading type="H5" text={metaData?.name} />
        </div>
        <div className="bg-cardBackground w-full p-8 rounded-lg">
          {metaData?.image && (
            <img
              alt={metaData?.name}
              className="object-cover"
              src={IPFSToHttps(metaData?.image)}
            />
          )}
        </div>
        <div className="p-8  justify-between border border-[##343434] w-full rounded-lg truncate">
          <Heading type="H5" text={metaData?.description} />
        </div>
      </div>
    </ConnectWallet>
  )
}

export default NftDetail

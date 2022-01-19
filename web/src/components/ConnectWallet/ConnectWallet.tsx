/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Heading } from '@buildcities/build-ui.components.all'
import { useEffect } from 'react'
import {
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
  useMoralis,
} from 'react-moralis'
import { useStore } from 'src/utils/stores/nftStore'
import { HeyIcon } from 'src/utils/svgs'
import {
  CONNECT_WALLET_CTA,
  CONNECT_WALLET_TEXT,
  CONNECT_NFT_CTA,
} from './presets'

const WELCOME_MESSAGE = 'Welcome to build_'

const getMetadataContent = async (url: string) => {
  return await (await fetch(url)).json()
}

type ConnectWalletProps = {
  children?: React.ReactElement
}

const ConnectWallet = ({ children }: ConnectWalletProps) => {
  const web3API = useMoralisWeb3Api()
  const { account, isAuthenticated, authenticate } = useMoralis()
  const { setToken, token, setMetaData, clearNFTStore } = useStore((s) => ({
    token: s.token,
    setToken: s.setToken,
    setMetaData: s.setMetadata,
    clearNFTStore: s.clearNFTStore,
  }))
  const { fetch, data } = useMoralisWeb3ApiCall(
    web3API.account.getNFTsForContract,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chain: process.env.WEB3_NETWORK as any,
      address: account,
      token_address: process.env.TOKEN_CONTRACT,
    }
  )
  // const { getNFTBalances, data } = useNFTBalances()

  useEffect(() => {
    if (isAuthenticated) {
      if (data && data.total > 0) {
        const nft = data?.result.find(
          (x) => x.symbol === process.env.TOKEN_SYMBOL
        )
        if (nft) {
          getMetadataContent(nft.token_uri).then(setMetaData)
          setToken(nft.symbol)
        }
      } else {
        setToken('non')
        clearNFTStore()
      }
    }
  }, [data])

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      fetch()
    }
    return () => {}
  }, [isAuthenticated, account])

  return (
    <div>
      {isAuthenticated /* && token == process.env.TOKEN_SYMBOL */ ? (
        children
      ) : (
        <div className="bg-cardBackground rounded-lg py-6 px-[33px] space-x-4 flex flex-col justify-center items-center">
          <HeyIcon containerClass="pb-4" />
          <Heading
            type="H5"
            className="text-center pb-[18px]"
            text={CONNECT_WALLET_TEXT}
          />
          {token && token == 'non' ? (
            <Button style="secondary" text={CONNECT_NFT_CTA} />
          ) : (
            <Button
              onClick={() => authenticate({ signingMessage: WELCOME_MESSAGE })}
              text={CONNECT_WALLET_CTA}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ConnectWallet

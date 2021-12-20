/* eslint-disable react-hooks/exhaustive-deps */
import { Heading, Button } from '@buildcities/build-ui.components.all'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import { GlobeIcon } from 'src/utils/svgs'
import { useAuth } from '@redwoodjs/auth'
import { useLazyQuery } from '@apollo/client'
import { DISCORD_MEMBER_QUERY } from 'src/utils/graphql/queries/discord'
import { toast } from '@redwoodjs/web/toast'
import {
  VERIFY_DISCORD_MEMBERSHIP_TEXT,
  VERIFY_DISCORD_CTA_TEXT,
  provider,
  scopes,
  LOGIN_DISCORD_CTA_TEXT,
} from './presets'
import { useEffect } from 'react'
import { prepareQueryVars } from './utils'
import { navigate, routes } from '@redwoodjs/router'

let toastId

const HomePage = () => {
  const { logIn } = useAuth()
  const { isAuthenticated, logOut, client } = useAuth()
  const [validateMembership, { data, loading, error }] =
    useLazyQuery(DISCORD_MEMBER_QUERY)

  const onClick = async () => {
    await logIn({ provider, scopes })
  }

  useEffect(() => {
    if (data && !loading) {
      if (data?.isDiscordMember?.isMember) {
        navigate(routes.viewHubs())
      }
    }
    if (error && !loading) {
      toastId = toast.error(error.message, { id: toastId })
      logOut()
    }
    if (loading) {
      toastId = toast.loading('Verifying membership', { id: toastId })
    } else {
      toast.dismiss(toastId)
    }
  }, [data, error, loading])

  useEffect(() => {
    if (isAuthenticated) {
      //logOut()
      validateMembership({
        variables: prepareQueryVars({
          session: client.auth.currentSession,
          guildId: process.env.BUILD_DISCORD_GUILD_ID,
        }),
      })
    }
  }, [isAuthenticated])

  return (
    <SingleColumnLayout metaTitle="Home">
      <div className="flex flex-col  justify-center items-center">
        <GlobeIcon className=" w-[140px] md:w-[185px] mb-6 md:mb-8 lg:w-[285px]" />
        {(!isAuthenticated || (data && !data.isDiscordMember.isMember)) && (
          <Heading
            type="H3"
            className="text-mainText mb-6 md:mb-8 H5 md:H4 lg:H3 text-center block max-w-[464px]"
            text={VERIFY_DISCORD_MEMBERSHIP_TEXT}
          />
        )}
        {data && !data.isDiscordMember.isMember && (
          <Button onClick={onClick} text={VERIFY_DISCORD_CTA_TEXT} />
        )}
        {!isAuthenticated && (
          <Button onClick={onClick} text={LOGIN_DISCORD_CTA_TEXT} />
        )}
      </div>
      )
    </SingleColumnLayout>
  )
}

export default HomePage

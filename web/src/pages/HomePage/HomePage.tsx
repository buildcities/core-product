/* eslint-disable @typescript-eslint/no-unused-vars */
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

  /* useEffect(() => {
    if (data) {
      if (data?.isDiscordMember?.isMember) {
        console.log(data?.isDiscordMember?.isMember)
        navigate(routes.viewHubs())
      }
    }
    if (error) {
      toastId = toast.error(error.message, { id: toastId })
      //console.log(error.message)
      logOut()
    }
    toastId && toast.dismiss(toastId)
  }, [data, error]) */

  useEffect(() => {
    if (isAuthenticated) {
      toastId = toast.loading('validating discord membership!')
      validateMembership({
        variables: prepareQueryVars({
          session: client.auth.currentSession,
          guildId: process.env.BUILD_DISCORD_GUILD_ID,
        }),
      })
        .then((result) => {
          if (result.data?.isDiscordMember?.isMember) {
            navigate(routes.viewHubs())
            toastId && toast.dismiss(toastId)
          }
        })
        .catch(() => {
          toastId = toast.error(error.message, { id: toastId })
        })
    }
  }, [isAuthenticated])

  return (
    <SingleColumnLayout metaTitle="Home">
      <div className="flex flex-col  justify-center items-center">
        <GlobeIcon className=" w-[140px] md:w-[185px] mb-6 md:mb-8 lg:w-[285px]" />

        <Heading
          type="H3"
          className="text-mainText mb-6 md:mb-8 H5 md:H4 lg:H3 text-center block max-w-[464px]"
          text={VERIFY_DISCORD_MEMBERSHIP_TEXT}
        />

        <Button onClick={onClick} text={LOGIN_DISCORD_CTA_TEXT} />
      </div>
      )
    </SingleColumnLayout>
  )
}

export default HomePage

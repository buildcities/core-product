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
import { useStore } from 'src/utils/stores/authStore'

let toastId

const HomePage = () => {
  const { setUser, clearUser } = useStore((store) => ({
    setUser: store.setUser,
    clearUser: store.clearUser,
  }))
  const { isAuthenticated, logOut, client, currentUser, logIn } = useAuth()
  const [validateMembership, { data, loading, error }] =
    useLazyQuery(DISCORD_MEMBER_QUERY)

  const onClick = async () => {
    await logIn({ provider, scopes })
  }

  useEffect(() => {
    //console.log(isAuthenticated)
    if (isAuthenticated && client?.auth?.currentSession) {
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
          } else {
            window.location.href = process.env.ONBOARDING_URL
          }
          toastId && toast.dismiss(toastId)
          if (result.error) {
            logOut().then(clearUser)
          }
        })
        .catch(() => {
          toastId = toast.error(error.message, { id: toastId })
          logOut().then(clearUser)
        })
    } else {
      logOut().then(clearUser)
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
    </SingleColumnLayout>
  )
}

export default HomePage

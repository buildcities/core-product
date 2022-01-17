type authClientSessionType = {
  provider_token: string
  user: {
    identities: [{ id: string }]
    user_metadata: { name: string; picture: string }
  }
}
type prepareQueryVarsType = {
  session: authClientSessionType
  guildId: string
}

export const prepareQueryVars = ({
  session,
  guildId,
}: prepareQueryVarsType) => {
  return {
    guildId,
    tokenId: session?.provider_token,
    userId: session?.user?.identities[0]?.id,
    userName: session?.user?.user_metadata?.name,
    avatar: session?.user?.user_metadata?.picture,
  }
}

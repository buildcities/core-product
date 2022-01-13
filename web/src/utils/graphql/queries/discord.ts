export const DISCORD_MEMBER_QUERY = gql`
  query isDiscordMember(
    $tokenId: String!
    $userId: String!
    $guildId: String!
    $userName: String!
    $avatar: String!
  ) {
    isDiscordMember(
      guildId: $guildId
      token: $tokenId
      userId: $userId
      userName: $userName
      avatar: $avatar
    ) {
      isMember
    }
  }
`

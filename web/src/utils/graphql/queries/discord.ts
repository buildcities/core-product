export const DISCORD_MEMBER_QUERY = gql`
  query isDiscordMember(
    $tokenId: String!
    $userId: String!
    $guildId: String!
  ) {
    isDiscordMember(guildId: $guildId, token: $tokenId, userId: $userId) {
      isMember
    }
  }
`

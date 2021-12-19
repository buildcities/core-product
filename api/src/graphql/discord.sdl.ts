export const schema = gql`
  input DiscordMemberInput {
    nickName: String!
    guildId: Int!
    userId: Int!
  }

  type DiscordMember {
    isMember: Boolean
  }

  type Query {
    isDiscordMember(
      token: String!
      guildId: String!
      userId: String!
    ): DiscordMember! @skipAuth
  }
`

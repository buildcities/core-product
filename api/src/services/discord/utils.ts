import OAuth2 from 'discord-oauth2'
const discordClient = new OAuth2({ version: 'v8' })
module.exports = async function (tokenId: string, guildId: string) {
  return (
    (await discordClient
      .getUserGuilds(tokenId)
      .then((results) => results.findIndex((guild) => guild.id == guildId))) > 0
  )
}

import { validate } from '@redwoodjs/api'

const memberBelongsToGuild = require('./utils')
import { db } from 'src/lib/db'

interface DiscordMemberArgs {
  token?: string
  userId?: string
  guildId?: string
}

export const isDiscordMember = async ({
  token,
  userId,
  guildId,
}: DiscordMemberArgs) => {
  validate(token, 'Token', {
    presence: { allowEmptyString: false },
  })

  validate(userId, 'User', {
    presence: { allowEmptyString: false },
  })

  validate(guildId, 'Guild', {
    presence: { allowEmptyString: false },
  })

  let user = await db.user.findUnique({
    where: { uuid: userId },
  })
  //user does not exist in local Db therefore get from guild
  if (!user) {
    const guild = token && (await memberBelongsToGuild(token, guildId))
    //user already belongs to guild but not in our Db, therefore add them
    if (guild) {
      user = await db.user.create({ data: { uuid: userId, guildId } })
    }
  }
  //user is not a member therefore invalidate and return false
  return { isMember: user && true }
}

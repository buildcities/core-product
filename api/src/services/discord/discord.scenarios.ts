import type { Prisma } from '@prisma/client'

const userId = '877980735972180049'
const guildId = '850513622194192395'
const userName = 'rollymaduk'
const avatar = 'testAvatarUrl'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: { one: { data: { uuid: userId, guildId, userName, avatar } } },
})

export type StandardScenario = typeof standard

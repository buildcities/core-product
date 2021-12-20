import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { uuid: 'String7678541', guildId: 'String' } },
    two: { data: { uuid: 'String2700879', guildId: 'String' } },
  },
})

export type StandardScenario = typeof standard

import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HubCreateArgs>({
  hub: {
    one: {
      data: { owner: { create: { uuid: 'String4382283', guildId: 'String' } } },
    },
    two: {
      data: { owner: { create: { uuid: 'String2203261', guildId: 'String' } } },
    },
  },
})

export type StandardScenario = typeof standard

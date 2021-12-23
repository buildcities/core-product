import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReviewCreateArgs>({
  review: {
    one: {
      data: {
        comments: 'String',
        owner: { create: { uuid: 'String2248117', guildId: 'String' } },
        hub: {
          create: {
            owner: { create: { uuid: 'String3195323', guildId: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        comments: 'String',
        owner: { create: { uuid: 'String1940258', guildId: 'String' } },
        hub: {
          create: {
            owner: { create: { uuid: 'String6490473', guildId: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard

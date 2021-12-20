import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReservationCreateArgs>({
  reservation: {
    one: {
      data: {
        checkInDate: '2021-12-20T14:41:32Z',
        checkOutDate: '2021-12-20T14:41:32Z',
        hub: {
          create: {
            owner: { create: { uuid: 'String1144956', guildId: 'String' } },
          },
        },
        owner: { create: { uuid: 'String2037702', guildId: 'String' } },
      },
    },
    two: {
      data: {
        checkInDate: '2021-12-20T14:41:32Z',
        checkOutDate: '2021-12-20T14:41:32Z',
        hub: {
          create: {
            owner: { create: { uuid: 'String9315240', guildId: 'String' } },
          },
        },
        owner: { create: { uuid: 'String6611', guildId: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard

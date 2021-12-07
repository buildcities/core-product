import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HubCreateArgs>({
  hub: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard

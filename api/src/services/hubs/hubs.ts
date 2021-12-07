import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const hubs = () => {
  return db.hub.findMany()
}

export const hub = ({ id }: Prisma.HubWhereUniqueInput) => {
  return db.hub.findUnique({
    where: { id },
  })
}

interface CreateHubArgs {
  input: Prisma.HubCreateInput
}

export const createHub = ({ input }: CreateHubArgs) => {
  return db.hub.create({
    data: input,
  })
}

interface UpdateHubArgs extends Prisma.HubWhereUniqueInput {
  input: Prisma.HubUpdateInput
}

export const updateHub = ({ id, input }: UpdateHubArgs) => {
  return db.hub.update({
    data: input,
    where: { id },
  })
}

export const deleteHub = ({ id }: Prisma.HubWhereUniqueInput) => {
  return db.hub.delete({
    where: { id },
  })
}

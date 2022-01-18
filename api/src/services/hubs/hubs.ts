import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const hubs = ({ filter, skip, take }) => {
  const where =
    filter && filter != 'All'
      ? {
          location: {
            path: ['continent'],
            equals: filter,
          },
        }
      : {}
  return db.hub.findMany({
    where,
    skip: skip || 0,
    take: take || 20,
  })
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

export const Hub = {
  reservations: (_obj, { root }: ResolverArgs<ReturnType<typeof hub>>) =>
    db.hub.findUnique({ where: { id: root.id } }).reservations(),
  owner: (_obj, { root }: ResolverArgs<ReturnType<typeof hub>>) =>
    db.hub.findUnique({ where: { id: root.id } }).owner(),
  reviews: (_obj, { root }: ResolverArgs<ReturnType<typeof hub>>) =>
    db.hub.findUnique({ where: { id: root.id } }).reviews(),
}

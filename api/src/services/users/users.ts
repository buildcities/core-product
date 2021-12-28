import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ uuid }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { uuid },
  })
}

export const User = {
  userRoles: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { uuid: root.uuid } }).userRoles(),
  reservations: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { uuid: root.uuid } }).reservations(),
  hubs: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { uuid: root.uuid } }).hubs(),
  reviews: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { uuid: root.uuid } }).reviews(),
}

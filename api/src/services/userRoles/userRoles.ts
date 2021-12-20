import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const userRoles = () => {
  return db.userRole.findMany()
}

export const userRole = ({ id }: Prisma.UserRoleWhereUniqueInput) => {
  return db.userRole.findUnique({
    where: { id },
  })
}

export const UserRole = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof userRole>>) =>
    db.userRole.findUnique({ where: { id: root.id } }).user(),
}

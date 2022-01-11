import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2)

export const reservations = () => {
  return db.reservation.findMany()
}

export const reservation = ({ id }: Prisma.ReservationWhereUniqueInput) => {
  return db.reservation.findUnique({
    where: { id },
  })
}

interface CreateReservationArgs {
  input: Prisma.ReservationCreateInput
}

export const createReservation = ({ input }: CreateReservationArgs) => {
  const id = generateId()
  return db.reservation.create({
    data: { ...input, ...{ id } }, 
  })
}

interface UpdateReservationArgs extends Prisma.ReservationWhereUniqueInput {
  input: Prisma.ReservationUpdateInput
}

export const updateReservation = ({ id, input }: UpdateReservationArgs) => {
  return db.reservation.update({
    data: input,
    where: { id },
  })
}

export const deleteReservation = ({
  id,
}: Prisma.ReservationWhereUniqueInput) => {
  return db.reservation.delete({
    where: { id },
  })
}

export const Reservation = {
  hub: (_obj, { root }: ResolverArgs<ReturnType<typeof reservation>>) =>
    db.reservation.findUnique({ where: { id: root.id } }).hub(),
  owner: (_obj, { root }: ResolverArgs<ReturnType<typeof reservation>>) =>
    db.reservation.findUnique({ where: { id: root.id } }).owner(),
}

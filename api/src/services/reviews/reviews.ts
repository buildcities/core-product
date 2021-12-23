import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const reviews = () => {
  return db.review.findMany()
}

export const review = ({ id }: Prisma.ReviewWhereUniqueInput) => {
  return db.review.findUnique({
    where: { id },
  })
}

interface CreateReviewArgs {
  input: Prisma.ReviewCreateInput
}

export const createReview = ({ input }: CreateReviewArgs) => {
  return db.review.create({
    data: input,
  })
}

interface UpdateReviewArgs extends Prisma.ReviewWhereUniqueInput {
  input: Prisma.ReviewUpdateInput
}

export const updateReview = ({ id, input }: UpdateReviewArgs) => {
  return db.review.update({
    data: input,
    where: { id },
  })
}

export const deleteReview = ({ id }: Prisma.ReviewWhereUniqueInput) => {
  return db.review.delete({
    where: { id },
  })
}

export const Review = {
  owner: (_obj, { root }: ResolverArgs<ReturnType<typeof review>>) =>
    db.review.findUnique({ where: { id: root.id } }).owner(),
  hub: (_obj, { root }: ResolverArgs<ReturnType<typeof review>>) =>
    db.review.findUnique({ where: { id: root.id } }).hub(),
}

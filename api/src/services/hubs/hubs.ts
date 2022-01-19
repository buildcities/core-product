import type { Prisma } from '@prisma/client'
import { validate, validateWith } from '@redwoodjs/api'
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
  validate(input.location['title'], 'Location', {
    presence: { allowEmptyString: false },
  })
  validate(input.location['lat'], 'Location latitude', {
    presence: { allowEmptyString: false },
  })
  validate(input.location['lng'], 'Location longitude', {
    presence: { allowEmptyString: false },
  })
  validate(input.location['country'], 'Location country', {
    presence: { allowEmptyString: false },
  })
  validate(input.location['continent'], 'Location continent', {
    presence: { allowEmptyString: false },
  })
  validate(input.location['city'], 'Location city', {
    presence: { allowEmptyString: false },
  })
  validate(input.type['estate'], 'Estate', {
    presence: { allowEmptyString: false },
  })
  validate(input.type['seats'], 'Estate', {
    presence: { allowEmptyString: false },
  })
  validate(input.images, 'Image(s)', {
    presence: { allowEmptyString: false },
  })

  validateWith(() => {
    if (input.images['length'] < 1) {
      throw "You'll need to have at least One image"
    }
  })
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

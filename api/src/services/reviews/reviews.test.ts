import {
  reviews,
  review,
  createReview,
  updateReview,
  deleteReview,
} from './reviews'
import type { StandardScenario } from './reviews.scenarios'

describe('reviews', () => {
  scenario('returns all reviews', async (scenario: StandardScenario) => {
    const result = await reviews()

    expect(result.length).toEqual(Object.keys(scenario.review).length)
  })

  scenario('returns a single review', async (scenario: StandardScenario) => {
    const result = await review({ id: scenario.review.one.id })

    expect(result).toEqual(scenario.review.one)
  })

  scenario('creates a review', async (scenario: StandardScenario) => {
    const result = await createReview({
      input: {
        comments: 'String',
        ownerId: scenario.review.two.ownerId,
        hubId: scenario.review.two.hubId,
      },
    })

    expect(result.comments).toEqual('String')
    expect(result.ownerId).toEqual(scenario.review.two.ownerId)
    expect(result.hubId).toEqual(scenario.review.two.hubId)
  })

  scenario('updates a review', async (scenario: StandardScenario) => {
    const original = await review({ id: scenario.review.one.id })
    const result = await updateReview({
      id: original.id,
      input: { comments: 'String2' },
    })

    expect(result.comments).toEqual('String2')
  })

  scenario('deletes a review', async (scenario: StandardScenario) => {
    const original = await deleteReview({ id: scenario.review.one.id })
    const result = await review({ id: original.id })

    expect(result).toEqual(null)
  })
})

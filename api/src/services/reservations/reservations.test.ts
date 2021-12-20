import {
  reservations,
  reservation,
  createReservation,
  updateReservation,
  deleteReservation,
} from './reservations'
import type { StandardScenario } from './reservations.scenarios'

describe('reservations', () => {
  scenario('returns all reservations', async (scenario: StandardScenario) => {
    const result = await reservations()

    expect(result.length).toEqual(Object.keys(scenario.reservation).length)
  })

  scenario(
    'returns a single reservation',
    async (scenario: StandardScenario) => {
      const result = await reservation({ id: scenario.reservation.one.id })

      expect(result).toEqual(scenario.reservation.one)
    }
  )

  scenario('creates a reservation', async (scenario: StandardScenario) => {
    const result = await createReservation({
      input: {
        checkInDate: '2021-12-20T14:41:32Z',
        checkOutDate: '2021-12-20T14:41:32Z',
        hubId: scenario.reservation.two.hubId,
        ownerId: scenario.reservation.two.ownerId,
      },
    })

    expect(result.checkInDate).toEqual('2021-12-20T14:41:32Z')
    expect(result.checkOutDate).toEqual('2021-12-20T14:41:32Z')
    expect(result.hubId).toEqual(scenario.reservation.two.hubId)
    expect(result.ownerId).toEqual(scenario.reservation.two.ownerId)
  })

  scenario('updates a reservation', async (scenario: StandardScenario) => {
    const original = await reservation({ id: scenario.reservation.one.id })
    const result = await updateReservation({
      id: original.id,
      input: { checkInDate: '2021-12-21T14:41:32Z' },
    })

    expect(result.checkInDate).toEqual('2021-12-21T14:41:32Z')
  })

  scenario('deletes a reservation', async (scenario: StandardScenario) => {
    const original = await deleteReservation({
      id: scenario.reservation.one.id,
    })
    const result = await reservation({ id: original.id })

    expect(result).toEqual(null)
  })
})

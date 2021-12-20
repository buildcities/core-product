import { hubs, hub, createHub, updateHub, deleteHub } from './hubs'
import type { StandardScenario } from './hubs.scenarios'

describe('hubs', () => {
  scenario('returns all hubs', async (scenario: StandardScenario) => {
    const result = await hubs()

    expect(result.length).toEqual(Object.keys(scenario.hub).length)
  })

  scenario('returns a single hub', async (scenario: StandardScenario) => {
    const result = await hub({ id: scenario.hub.one.id })

    expect(result).toEqual(scenario.hub.one)
  })

  scenario('creates a hub', async (scenario: StandardScenario) => {
    const result = await createHub({
      input: { ownerId: scenario.hub.two.ownerId },
    })

    expect(result.ownerId).toEqual(scenario.hub.two.ownerId)
  })

  scenario('updates a hub', async (scenario: StandardScenario) => {
    const original = await hub({ id: scenario.hub.one.id })
    const result = await updateHub({
      id: original.id,
      input: { ownerId: scenario.hub.two.ownerId },
    })

    expect(result.ownerId).toEqual(scenario.hub.two.ownerId)
  })

  scenario('deletes a hub', async (scenario: StandardScenario) => {
    const original = await deleteHub({ id: scenario.hub.one.id })
    const result = await hub({ id: original.id })

    expect(result).toEqual(null)
  })
})

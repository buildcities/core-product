import { hubs, hub, deleteHub } from './hubs'
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

  scenario('deletes a hub', async (scenario: StandardScenario) => {
    const original = await deleteHub({ id: scenario.hub.one.id })
    const result = await hub({ id: original.id })

    expect(result).toEqual(null)
  })
})

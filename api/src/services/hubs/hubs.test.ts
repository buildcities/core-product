import { hubs } from './hubs'
import type { StandardScenario } from './hubs.scenarios'

describe('hubs', () => {
  scenario('returns all hubs', async (scenario: StandardScenario) => {
    const result = await hubs()

    expect(result.length).toEqual(Object.keys(scenario.hub).length)
  })
})

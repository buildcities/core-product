import { userRoles } from './userRoles'
import type { StandardScenario } from './userRoles.scenarios'

describe('userRoles', () => {
  scenario('returns all userRoles', async (scenario: StandardScenario) => {
    const result = await userRoles()

    expect(result.length).toEqual(Object.keys(scenario.userRole).length)
  })
})

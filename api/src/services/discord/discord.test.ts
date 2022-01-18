import { db } from 'src/lib/db'
import { isDiscordMember } from './discord'
jest.mock('./utils')
const memberBelongsToGuild = require('./utils')
memberBelongsToGuild
  .mockImplementationOnce(() => {
    throw new Error()
  })
  .mockImplementationOnce(() => false)
  .mockImplementationOnce(() => true)

const NOT_EMPTY_VAR = 'not-empty'

describe('discord: Empty arguments', () => {
  it('throws when token args is empty', () => {
    expect(() =>
      isDiscordMember({
        token: '',
        userId: NOT_EMPTY_VAR,
        guildId: NOT_EMPTY_VAR,
        userName: NOT_EMPTY_VAR,
        avatar: NOT_EMPTY_VAR,
      })
    ).rejects.toThrow('Token must be present')
  })

  it('throws when userId args is empty', () => {
    expect(() =>
      isDiscordMember({
        token: 'not empty',
        userId: '',
        guildId: NOT_EMPTY_VAR,
        userName: NOT_EMPTY_VAR,
        avatar: NOT_EMPTY_VAR,
      })
    ).rejects.toThrowError('UserId must be present')
  })

  it('throws when userName args is empty', () => {
    expect(() =>
      isDiscordMember({
        token: 'not empty',
        userId: NOT_EMPTY_VAR,
        guildId: NOT_EMPTY_VAR,
        avatar: NOT_EMPTY_VAR,
        userName: '',
      })
    ).rejects.toThrowError('UserName must be present')
  })

  it('throws when avatar args is empty', () => {
    expect(() =>
      isDiscordMember({
        token: 'not empty',
        userId: NOT_EMPTY_VAR,
        guildId: NOT_EMPTY_VAR,
        avatar: '',
        userName: NOT_EMPTY_VAR,
      })
    ).rejects.toThrowError('avatar must be present')
  })

  it('throws when guildId args is empty', () => {
    expect(() =>
      isDiscordMember({
        token: NOT_EMPTY_VAR,
        userId: NOT_EMPTY_VAR,
        guildId: '',
        userName: NOT_EMPTY_VAR,
      })
    ).rejects.toThrowError('Guild must be present')
  })
})

describe('discord:validate membership', () => {
  scenario('should return true if member exists in Db', async () => {
    expect(
      isDiscordMember({
        userId: '877980735972180049',
        token: NOT_EMPTY_VAR,
        guildId: '850513622194192395',
        userName: 'rollymaduk',
        avatar: 'testAvatarUrl',
      })
    ).resolves.toBeTruthy()
  })

  it('should throw error when wrong discord token is used', () => {
    expect(() =>
      isDiscordMember({
        userId: NOT_EMPTY_VAR,
        token: NOT_EMPTY_VAR,
        guildId: NOT_EMPTY_VAR,
        userName: NOT_EMPTY_VAR,
        avatar: NOT_EMPTY_VAR,
      })
    ).rejects.toThrow()
  })

  it('should return null when user does not exist in db and guild', () => {
    expect(
      isDiscordMember({
        userId: NOT_EMPTY_VAR,
        token: NOT_EMPTY_VAR,
        guildId: NOT_EMPTY_VAR,
        userName: NOT_EMPTY_VAR,
        avatar: NOT_EMPTY_VAR,
      })
    ).resolves.toEqual({ isMember: null })
  })

  scenario(
    'should return true and add a new user when user does not exist in db but is alread a guild member',
    async () => {
      const discordStat = await isDiscordMember({
        userId: '8779807359721809',
        token: NOT_EMPTY_VAR,
        guildId: '8505136221941925',
        userName: 'rollymaduk',
        avatar: 'testAvatarUrl',
      })
      expect(discordStat).toBeTruthy()
      const users = await db.user.findMany()
      expect(users.length).toEqual(2)
    }
  )
})

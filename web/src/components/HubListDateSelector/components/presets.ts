import { range, padStart } from 'lodash'

export const formatTime = (text: string, format = '0', padding = 2) =>
  padStart(text, padding, format)
export const hoursData = range(1, 13).map((item) => ({
  label: formatTime(item.toString(), '0', 1),
  value: formatTime(item.toString(), '0', 1),
}))
export const minutesData = range(0, 60, 5).map((item) => ({
  label: formatTime(item.toString()),
  value: formatTime(item.toString()),
}))
export const aMpMData = ['AM', 'PM'].map((item) => ({
  label: item,
  value: item,
}))

export const defaultAvailability = (day: string) => ({
  name: 'availability',
  defaultValue: {
    [day]: {
      from: {
        hours: undefined,
        minutes: undefined,
        period: undefined,
      },
      to: {
        hours: undefined,
        minutes: undefined,
        period: undefined,
      },
    },
  },
})

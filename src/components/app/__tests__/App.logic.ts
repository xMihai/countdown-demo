import { duration, doubleDigits, splitDuration } from '../App.logic'
import moment from 'moment'

describe('App logic', () => {
  test('duration future', () => {
    const future = moment()
      .add(1, 'week')
      .format('DD-MM-YYYY')

    expect(duration(future).toISOString()).toMatch(/^PT\d+H\d+M\d+/)
  })

  test('duration past', () => {
    const future = moment()
      .subtract(1, 'week')
      .format('DD-MM-YYYY')

    expect(duration(future).toISOString()).toEqual('P0D')
  })

  test('doubleDigits > zero', () => {
    expect(doubleDigits(0)).toEqual('00')
    expect(doubleDigits('0')).toEqual('00')
  })

  test('doubleDigits > single', () => {
    expect(doubleDigits(5)).toEqual('05')
    expect(doubleDigits('5')).toEqual('05')
  })

  test('doubleDigits > double', () => {
    expect(doubleDigits(35)).toEqual('35')
    expect(doubleDigits('35')).toEqual('35')
  })

  test('splitDuration > only hours', () => {
    const t = jest.fn()
    t.mockReturnValue('mock')

    const duration = moment.duration({ seconds: 5, minutes: 10, hours: 15 })

    expect(splitDuration(t)(duration)).toEqual([
      { label: 'mock', value: '15' },
      { label: 'mock', value: '10' },
      { label: 'mock', value: '05' },
    ])

    expect(t).toHaveBeenCalledTimes(5)
  })

  test('splitDuration > withDays', () => {
    const t = jest.fn()
    t.mockReturnValue('mock')

    const duration = moment.duration({ seconds: 5, minutes: 10, hours: 15, days: 3 })

    expect(splitDuration(t)(duration)).toEqual([
      { label: 'mock', value: '3' },
      { label: 'mock', value: '15' },
      { label: 'mock', value: '10' },
      { label: 'mock', value: '05' },
    ])

    expect(t).toHaveBeenCalledTimes(5)
  })

  test('splitDuration > withMonths', () => {
    const t = jest.fn()
    t.mockReturnValue('mock')

    const duration = moment.duration({ seconds: 5, minutes: 10, hours: 15, days: 3, months: 2 })

    expect(splitDuration(t)(duration)).toEqual([
      { label: 'mock', value: '2' },
      { label: 'mock', value: '3' },
      { label: 'mock', value: '15' },
      { label: 'mock', value: '10' },
      { label: 'mock', value: '05' },
    ])

    expect(t).toHaveBeenCalledTimes(5)
  })

  test('splitDuration > withMonths, zero days', () => {
    const t = jest.fn()
    t.mockReturnValue('mock')

    const duration = moment.duration({ seconds: 5, minutes: 10, hours: 15, months: 2 })

    expect(splitDuration(t)(duration)).toEqual([
      { label: 'mock', value: '2' },
      { label: 'mock', value: '0' },
      { label: 'mock', value: '15' },
      { label: 'mock', value: '10' },
      { label: 'mock', value: '05' },
    ])

    expect(t).toHaveBeenCalledTimes(5)
  })
})

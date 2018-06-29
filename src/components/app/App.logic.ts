import moment from 'moment'
import flow from 'lodash/fp/flow'
import { TranslationFunction } from 'react-i18next'

// Create moment duration from now to given date
export const duration = (date: string): moment.Duration => {
  const endMoment = moment(date, 'DD-MM-YYYY')
  const diff = -moment().diff(endMoment)
  const duration = moment.duration(diff > 0 ? diff : 0)
  return duration
}

// Make numbers display in double digits (5 -> 05)
export const doubleDigits = (value: string | number): string => ('0' + value).slice(-2)

// Split duration into objects (seconds, minutes, hours, ...)
export const splitDuration = (t: TranslationFunction) => (duration: moment.Duration) => {
  const months = { label: t('time.months'), value: duration.months().toString() }
  const days = { label: t('time.days'), value: duration.days().toString() }
  const hours = { label: t('time.hours'), value: doubleDigits(duration.hours()) }
  const minutes = { label: t('time.minutes'), value: doubleDigits(duration.minutes()) }
  const seconds = { label: t('time.seconds'), value: doubleDigits(duration.seconds()) }

  // Conditions for displaying months and days
  const withMonths = duration.months() > 0
  const withDays = withMonths || duration.days() > 0

  return [...(withMonths ? [months] : []), ...(withDays ? [days] : []), hours, minutes, seconds]
}

// Curried transform from date string to duration parts
export const getDurationParts = (t: TranslationFunction) =>
  flow(
    duration,
    splitDuration(t)
  )

import { DateTime } from "luxon"

export function getSchoolDaysForGivenMonth(givenMonth: string) {
  const startDate = DateTime.fromISO(givenMonth)
    .setZone("Asia/Manila")
    .startOf("month")
  const nextMonth = startDate.plus({
    month: 1,
  })

  const days: string[] = []
  let currentDate = startDate

  while (currentDate < nextMonth) {
    if (currentDate.weekday < 6) days.push(currentDate.toISO()!)

    currentDate = currentDate.plus({
      day: 1,
    })
  }

  return days
}

export function getCountOfWeekDaysToSkipFromGivenMonth(givenMonth: string) {
  const { weekday } = DateTime.fromISO(givenMonth)
    .setZone("Asia/Manila")
    .startOf("month")

  // Monday
  if (weekday === 1) return 0
  // Tuesday
  if (weekday === 2) return 1
  // Wednesday
  if (weekday === 3) return 2
  // Thursday
  if (weekday === 4) return 3
  // Friday
  if (weekday === 5) return 4
  // Saturday
  if (weekday === 6) return 0
  // Sunday
  if (weekday === 7) return 0

  throw new Error(`Weekday has invalid value: ${weekday}`)
}

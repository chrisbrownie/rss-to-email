const dateFormatter = new Intl.DateTimeFormat('en-AU', {
  dateStyle: 'long', // 1 August 2023
  timeStyle: 'long', // 10:15:14 am AEST
  timeZone: 'Australia/Melbourne',
})


export const formatDate = (date: string) => dateFormatter.format(new Date(date))

export interface IHomeCard {
  id: number | undefined
  title: string
  body: string
  stacks: [string, string, ...string[]]
  img: [string, ...string[]]
  category?: 'Web Apps' | 'Dashboards' | 'Landing Pages'
  link?: string
}

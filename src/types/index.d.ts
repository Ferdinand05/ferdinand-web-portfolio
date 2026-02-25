export interface IHomeCard {
  id: number | undefined
  title: string
  body: string
  stacks: [string, string, ...string[]]
  img: [string, ...string[]]
  category?: string
  link?: string
}

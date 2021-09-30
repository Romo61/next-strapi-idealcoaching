export declare global {
  interface Window {
    dataLayer: { event: string }[]
  }
  interface IMedia {
    id?: string | number
    alternativeText?: string
    caption?: string
    mime?: string
    url?: string
    width?: number
    height?: number
  }
  interface ILink {
    id: string | number
    text: string
    title: string
    newTab: boolean
  }
  interface IButton {
    type: string
    theme: string
    text: string
    newTab: boolean
  }
}

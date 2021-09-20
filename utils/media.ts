export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null
  }

  return `${
    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${url}`
}

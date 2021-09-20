import { getStrapiURL, getPageData } from 'utils/api'
import Sections from 'components/sections'
import Seo from 'components/elements/seo'
import { useRouter } from 'next/dist/client/router'
import Error from './_error'

import React from 'react'

const DynamicPage = ({ sections, metadata, preview }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <Error statusCode={404} />
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  return (
    <div>
      {/* Select Menu to see different content */}
      {/* Add meta tags for SEO*/}
      <Seo metadata={metadata} />

      {/* Display content sections */}
      <Sections sections={sections} preview={preview} />
    </div>
  )
}

export async function getStaticPaths() {
  // Get all pages from Strapi
  const pages = await (await fetch(getStrapiURL('/pages'))).json()
  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = page.slug.split('__')

    return {
      params: { slug: slugArray },
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params, preview = null }) {
  // Find the page data for the current slug
  let chainedSlugs

  if (params == {} || !params.slug) {
    // To get the homepage, find the only page where slug is an empty string
    chainedSlugs = ``
  } else {
    // Otherwise find a page with a matching slug
    // Recompose the slug that was saved in Strapi
    chainedSlugs = params.slug.join('__')
  }

  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(chainedSlugs, preview)

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata } = pageData

  return {
    props: {
      chainedSlugs,
      preview,
      sections: contentSections,

      metadata,
    },
  }
}

export default DynamicPage

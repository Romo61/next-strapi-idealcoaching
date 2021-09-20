import App from 'next/app'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { getStrapiMedia } from 'utils/media'
import { getStrapiURL, getGlobalData } from 'utils/api'
import Layout from 'components/layout'

import toast, { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import 'styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()

  // Prevent Next bug when it tries to render the [[...slug]] route
  const router = useRouter()

  if (router.asPath === '/[[...slug]]') {
    return null
  }

  // Extract the data we need
  const { global } = pageProps

  if (global == null) {
    return <ErrorPage statusCode={404} />
  }
  const { metadata } = global

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global?.favicon?.url)} />
        <link rel="prefetch" href="/fonts/inter-var-latin.woff2" />
        <meta
          name="facebook-domain-verification"
          content="a1devh049ionf4wy6lxqek1fha98np"
        />
      </Head>
      {/* Global site metadata */}
      {/* <DefaultSeo
        titleTemplate={`%s | ${global?.metaTitleSuffix}`}
        title={'Page'}
        description={metadata?.metaDescription}
        openGraph={{
          images: Object?.values(metadata?.shareImage?.formats).map((image) => {
            return {
              url: getStrapiMedia(image?.url),
              width: image?.width,
              height: image?.height,
            }
          }),
        }}
        twitter={{
          cardType: metadata?.twitterCardType,
          handle: metadata?.twitterUsername,
        }}
      /> */}
      {/* Display the content */}
      <QueryClientProvider client={queryClient}>
        <Layout global={global}>
          <Component {...pageProps} />
          <Toaster />
        </Layout>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await getGlobalData()
  // Pass the data to our page via props

  return { ...appProps, pageProps: { global, path: ctx.pathname } }
}

export default MyApp

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/logo.jpg" />
          <meta
            name="google-site-verification"
            content="_GnkHr4rAs_WXQy69wxzElwawE3bBM9Svu9bzMHQFCg"
          />
          <script
            id="usercentrics-cmp"
            data-settings-id="t4_Zx_gEs"
            src="https://app.usercentrics.eu/browser-ui/latest/bundle.js"
            defer
          ></script>

          <meta
            name="msvalidate.01"
            content="6A9167171CB75C3A6EB9B2299F08F38C"
          />
          <script
            data-usercentrics="Google Tag Manager"
            type="text/plain"
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-MBTTTNH');
              `,
            }}
          />

          <link rel="preload" href="/fonts/inter-var-latin.woff2"></link>

          <link
            rel="preconnect"
            href="https://aggregator.service.usercentrics.eu"
          ></link>
          <link rel="preconnect" href="https://api.usercentrics.eu"></link>
        </Head>

        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MBTTTNH"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

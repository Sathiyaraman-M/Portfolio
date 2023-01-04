import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="author" content="Sathiyaraman M"/>
            <meta name="description" content=""/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <title>Sathiyaraman M</title>
        </Head>
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Component {...pageProps} />
      </>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
import Navbar from '../components/shared/navbar';
import Footer from '../components/shared/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>
      </Head>
      <body id="page-top">
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}

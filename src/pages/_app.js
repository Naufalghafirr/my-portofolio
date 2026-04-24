import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'

import '@/styles/typewriter.css'
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        scrollPaddingTop: "80px", // Offset untuk sticky header
      },
      body: {
        scrollBehavior: "smooth",
      },
      "*": {
        scrollBehavior: "smooth",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Naufal Ghafir Ramadhan - Portofolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:Naufal Ghafir Ramadhan" content="Portofolio Naufal Ghafir Ramadhan" />
        <meta name="google-site-verification" content="bfffLT1VDAAQVMeQeFj9wgBuEIAexcN6lRM5xHtHXVs" />
        <link rel="icon" href="/image/logo.png"/>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

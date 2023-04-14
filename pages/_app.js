import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

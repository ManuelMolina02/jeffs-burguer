import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/global.scss'
import config from 'react-reveal/globals';

function MyApp({ Component, pageProps }: AppProps) {
  config({ ssrFadeout: true });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

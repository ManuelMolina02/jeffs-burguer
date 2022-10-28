import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';

export default function SignIn() {

  return (
    <>

      <Head>
        <title>home | Jeffs Burguer</title>
      </Head>

      <Box maxW={'1580px'} m='0 auto'>
        {/* <Header /> */}
        <Banner />
        <Products />
        <Highlight />
        <Menu />
        <Footer />

      </Box>

    </>
  )
}



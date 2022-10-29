import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';
import { GetStaticProps } from 'next';
import { api } from '../services/api';

export default function Home({ data }) {

  console.log(data);


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
        <Menu itensMenu={data} />
        <Footer />

      </Box>

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get('/data').then(response => response.data)

  return {
    props: {
      data: response,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
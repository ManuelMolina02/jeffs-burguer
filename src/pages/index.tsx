import { Box } from '@chakra-ui/react'
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';

export default function Home({ dataCards }) {

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
        <Menu cards={dataCards} />
        <Footer />

      </Box>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await api.get('/data').then(response => response.data)

  const dataCards = response.map(item => {
    return {
      id: item.id,
      title: item.name,
      src: item.image,
      price: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price),
      ingredientsList: item.ingredients.split(','),
    }
  })

  return {
    props: {
      dataCards
    },
  }
}
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Box, Image } from '@chakra-ui/react'
import { api } from '../services/api';
import { Header, Banner, Products, Highlight, Menu, Footer } from '../components';
import { About } from '../components/About';
import { useEffect, useState } from 'react'
import Pulse from 'react-reveal/Pulse';
import styles from './Home.module.scss'

export default function Home({ dataCards }) {

  const [array, seyArray] = useState([])
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(false)
    }, 7000)
  }, [])

  return (
    <Box maxW={'1580px'} m='0 auto'>
      <Head>
        <title>home | Jeffs Burguer</title>
      </Head>

      {
        showOverlay && (
          <Box

            className={`${styles.homeOverlay}`}
          >


            <Image src='logo.png' objectFit={'cover'} alt='' className={`${styles.imgOverlay}`} />

          </Box>
        )
      }

      <>
        <Header data={dataCards} />
        <Banner data={dataCards} />
        <Products data={dataCards} />
        <About />
        <Highlight />
        <Menu cards={dataCards} />
        <Footer />
      </>

    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/data').then(response => response.data)

  const dataCards = response.map(item => {
    return {
      id: item.id,
      title: item.name,
      type: item.type,
      src: item.src,
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
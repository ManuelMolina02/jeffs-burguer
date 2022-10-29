import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';
import { GetServerSideProps, GetStaticProps } from 'next';
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

  const response = [
    {
      id: 1,
      name: "Costela Premium",
      type: "Hambúrguer",
      price: 26.0,
      image: "/lanches/costela-premium.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 2,
      name: "Nacho Burger",
      type: "Hambúrguer",
      price: 30.0,
      image: "/lanches/nacho-burguer.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 3,
      name: "4 Queijos Burguer",
      type: "Hambúrguer",
      price: 30.0,
      image: "/lanches/quatro-queijos.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Crocante",
      type: "Hambúrguer",
      price: 28.0,
      image: "/lanches/crocante.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Provolone",
      type: "Hambúrguer",
      image: "/lanches/provolone.jpeg",
      price: 30.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 5,
      name: "Smash Júnior",
      type: "Smash",
      price: 16.0,
      image: "/lanches/smash-junior.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 6,
      name: "Smash Salada",
      type: "Smash",
      price: 18.0,
      image: "/lanches/smash-salada.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 7,
      name: "Jack Bacon",
      type: "Hambúrguer",
      image: "/lanches/jack-bacon.jpeg",
      price: 25.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 8,
      name: "Jack Rodeio",
      type: "Hambúrguer",
      image: "/lanches/jack-rodeio.jpeg",
      price: 25.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 9,
      name: "Hot Dog 1",
      type: "Hot Dog",
      price: 18.0,
      image: "/lanches/hot-dog-um.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 10,
      name: "Hot Dog 2",
      type: "Hot Dog",
      price: 16.0,
      image: "/lanches/hot-dog-dois.jpeg",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 11,
      name: "Hot Dog 3",
      type: "Hot Dog",
      image: "/lanches/hot-dog-tres.jpeg",
      price: 19.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
  ];

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
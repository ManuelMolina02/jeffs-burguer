import { useState } from 'react'

import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { Modal } from "../Modal";
import { CardSection } from "./CardSection";
import styles from './Products.module.css';

export function Products() {

  const [showModal, setShowModal] = useState(false)

  return (
    <Box className={styles.products} bg='#F6F2E9'>

      <Flex align={'center'}>
        <Image src='/background.svg' alt='logo'
          className={styles.bgImage}
          w={'420px'}
          objectFit={'cover'}
          flexDirection={'column'}
        />

        <Box className={styles.cardsProducts} >
          <CardSection title={'Hamburguers'} handleModal={setShowModal} description={'Lorem Ipsum is simply dummy text of the typesetting industry Ipsum is simply.'} />
          <CardSection title={'Hot Dog'} handleModal={setShowModal} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply. '} />
          <CardSection title={'Bebidas'} handleModal={setShowModal} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply'} />
        </Box>
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={{}} location='products' />


      <Image src='/mosaico.svg' alt='logo'
        position={'relative'}
        w={'100%'}
        h={'52px'}
        display={'block'}
        objectFit={'cover'}
      />
    </Box>
  )
}
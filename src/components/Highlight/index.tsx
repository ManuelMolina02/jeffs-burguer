import { useState } from 'react'


import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Modal } from "../Modal";
import styles from './Highlight.module.css';

export function Highlight() {

  const [showModal, setShowModal] = useState(false)

  return (
    <Flex className={styles.highlight} bg='#77212E'>
      <Flex className={styles.boxImages}>
        <Image src='/images/lanche_2.png' alt='logo' />
      </Flex>

      <Flex w='420px' color={'white'} flexDirection={'column'} justify='center' gap={8}>
        <Heading fontSize={'32px'}>Sugestão do Chef</Heading>
        <Text fontSize={'22px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</Text>
        <Button onClick={() => setShowModal(true)} variant={'outline'} size='lg' _hover={{ color: '#77212E', bg: 'white' }}>
          ver mais
        </Button>
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={{}} />

    </Flex>
  )
}
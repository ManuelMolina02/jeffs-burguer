import { useState } from 'react'


import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Modal } from '../Modal';

export function CardSection({ title, description, data }) {

  const [showModal, setShowModal] = useState(false)
  const [optionsSelected, setOptionsSelected] = useState('')

  return (


    <>

      <VStack
        spacing={8} p={8}
        textAlign='center'
        align='center'
        justify={'center'}
        onClick={() => setShowModal(true)}
      >

        <Box
          color={'#E95B2D'}
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Heading fontSize={40}>
            {title}
          </Heading>

          <Image src='/images/divider.svg' w={32} alt='logo' />
        </Box>

        <Text
          color={'#777777'}
          fontSize={22}>
          {description}
        </Text>

        <Button
          color={'#E95B2D'}
          borderColor={'#E95B2D'}
          variant='outline'
          _hover={{
            bg: '#E95B2D',
            color: '#fff'
          }}

          onClick={
            () => setShowModal(title)
          }
        >
          ver mais
        </Button>


      </VStack>

      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='products' conditional={title} />

    </>


  )
}
import { useState } from 'react'
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Modal } from '../Modal';

export function CardSection({ title, description, data }) {

  const [showModal, setShowModal] = useState(false)

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
          <Image src='/images/divider_products.svg' w={'128px'} h='18px' alt='logo' />
        </Box>

        <Box w={80} display='flex' flexDir={'column'} gap={5}>
          <Text
            color={'#616161'}
            fontSize={22}>
            {description}
          </Text>

          <Button
            color={'#616161'}
            borderColor={'#616161'}
            variant='outline'
            w='160px'
            margin={'0 auto'}
            _hover={{
              bg: '#E95B2D',
              color: '#fff',
              border: '#fff'
            }}

            onClick={
              () => setShowModal(title)
            }
          >
            ver mais
          </Button>
        </Box>
      </VStack>

      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='products' conditional={title} />

    </>


  )
}
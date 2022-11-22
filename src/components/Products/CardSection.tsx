import { useState } from 'react'
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Modal } from '../Modal';
import Fade from 'react-reveal/Fade';

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
        <Fade top delay={175}>
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

          <Text
            color={'#616161'}
            fontSize={22}>
            {description}
          </Text>

          <Button
            color={'#616161'}
            borderColor={'#616161'}
            variant='outline'
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
        </Fade>
      </VStack>

      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='products' conditional={title} />

    </>


  )
}
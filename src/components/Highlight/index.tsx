import { useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Modal } from "../Modal";
import styles from './Highlight.module.scss';

export function Highlight() {

  const data = {
    src: 'smash-salada.webp'
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <Flex id='highlight' className={styles.highlight} bg='#212121'>

      <Flex className={styles.boxImages}>
        <Image src={`/images/element_1.png`} alt='logo' />
      </Flex>


      <Flex className={styles.contentHighlight} w='50%' color={'white'} flexDirection={'column'} justify='center' gap={8}>
        <Heading fontSize={'100px'} letterSpacing='10px' fontFamily='Cabin Sketch' color='#F4887A'>PROMOÇÃO</Heading>
        <Box fontSize={'26px'} color='#ccc'>
          <Text mb='12px'>
            Smash salada com Bacon é a escolha perfeita pra quem não quer gastar muito e comer bem!
          </Text>

          <Text>
            Toda simplicidade do <strong>Smash Salada</strong> com adicional de bacon por apenas R$ 2,00.
            Todo sabor que você procura em um só lugar 😛

          </Text>
        </Box>
        <Button onClick={() => setShowModal(true)} variant={'outline'} fontSize='32px' size='lg' h='80px' _hover={{ color: '#F4887A', bg: 'white' }}>
          ver mais
        </Button>
      </Flex>

      <Flex className={styles.boxImages}>
        <Image src={`/images/element_2.png`} alt='logo' />
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='highlight' conditional={''} />
    </Flex>
  )
}
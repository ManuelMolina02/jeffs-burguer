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
      <Image src={`/images/element-1.webp`} alt='logo' w='20%' h='720px' objectFit={'cover'} />

      <Flex className={styles.contentHighlight}>
        <Heading color=''>Sugestão do Chef</Heading>
        <Box fontSize={'26px'} color='#ccc'>
          <Text mb='12px'>
            {"A sugestão do chef é o Jack Bacon, criado em 2017. Esse foi o primeiro integrante da família Jeff's"}
          </Text>

          <Text>
            Uma combinação de cebola caramelizada, com cheddar cremoso e muito bacon fazem o seu sucesso ser tão grande 😉
          </Text>
        </Box>
        <Button onClick={() => setShowModal(true)} variant={'outline'} fontSize='4xl' size='lg' h='80px' _hover={{ color: '#df5427', bg: '#feeddd' }}>
          ver mais
        </Button>
      </Flex>


      <Image
        src={`/images/element-2.webp`}
        alt='logo'
        w='25%'
        h='720px'
        objectFit={'cover'}
        ml='80px'
      />


      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='highlight' conditional={''} />
    </Flex>
  )
}
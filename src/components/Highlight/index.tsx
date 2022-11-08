import { useState } from 'react'
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Modal } from "../Modal";
import styles from './Highlight.module.scss';

export function Highlight() {

  const data = {
    src: 'smash-salada.webp'
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <Flex id='highlight' className={styles.highlight} bg='#77212E'>
      <Flex className={styles.boxImages}>
        <Image src={`/lanches/${data.src}`} alt='logo' />
      </Flex>

      <Flex className={styles.contentHighlight} w='420px' color={'white'} flexDirection={'column'} justify='center' gap={8}>
        <Heading fontSize={'32px'}>Sugestão do Chef</Heading>
        <Text fontSize={'22px'}>
          Smash salada com Bacon é a escolha perfeita pra quem não quer gastar muito e comer bem!
          Toda simplicidade do <strong>Smash Salada</strong> com adicional de bacon por apenas R$ 2,00.
          Todo sabor que você procura em um só lugar 😛

        </Text>
        <Button onClick={() => setShowModal(true)} variant={'outline'} size='lg' _hover={{ color: '#77212E', bg: 'white' }}>
          ver mais
        </Button>
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={data} location='highlight' conditional={''} />
    </Flex>
  )
}
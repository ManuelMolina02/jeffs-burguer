import { useState } from 'react'
import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { Modal } from '../Modal';
import { MdExpandLess } from 'react-icons/md'
import styles from './CardItem.module.scss'

export function CardItem({ cardData }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <GridItem
      w='280px'
      h='380px'
      bg='blue.500'
      textAlign='center'
      overflow='hidden'
      bgImage={`url(/lanches/${cardData.src})`}
      bgSize={'cover'}
      bgPosition={'center'}
      borderRadius='12px'
      boxShadow={'4px 4px 6.2px 2px rgba(0, 0, 0, 0.25)'}
      display='flex'
      alignItems={'flex-end'}
      cursor='pointer'
      onClick={() => setShowModal(true)}
      className={styles.cardItem}
    >
      {
        cardData.title === 'Nacho Burger' && <Image src='/images/doritos.webp' alt='' position={'absolute'} w='140px' mb='260px' ml='140px' />
      }


      {
        cardData.title === 'Costela Premium' && <Image src='/images/catupiry.webp' alt='' position={'absolute'} w='88px' mb='260px' ml='160px' />
      }

      {
        cardData.title === 'Crocante' && <Image src='/images/pringles.webp' alt='' position={'absolute'} w='120px' mb='220px' ml='160px' />
      }

      <Flex bg='gray.900' opacity={'.86'} w='100%' height={'60px'} align='center' justify={'space-between'} px='16px' >


        <Text fontSize={18} color='orange.100' onClick={() => setShowModal(true)}>
          {cardData.title}
        </Text>

        <MdExpandLess size={30} color='white' />
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={cardData} location='menu' conditional={''} />


    </GridItem>
  )
}
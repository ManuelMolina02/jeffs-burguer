import { useState } from 'react'
import { Box, Button, Flex, GridItem, Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { Modal } from './Modal';

export function CardItem({ title, image }) {


  const [showModal, setShowModal] = useState(false)
  return (
    <GridItem
      w='280px'
      h='380px'
      bg='blue.500'
      textAlign='center'
      overflow='hidden'
      bgImage={`url(${image})`}
      bgSize={'cover'}
      bgPosition={'center'}
      borderRadius='12px'
      boxShadow={'4px 4px 6.2px 2px rgba(0, 0, 0, 0.25)'}
      display='flex'
      alignItems={'flex-end'}
      cursor='pointer'

      onClick={
        () => setShowModal(true)
      }
    >
      <Flex bg='gray.900' opacity={'.86'} position={'relative'} w='100%' height={'60px'} align='center' pl='8px'>
        <Text fontSize={18} color='orange.100' onClick={() => setShowModal(true)}>
          {title}
        </Text>
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} title={title} image={image} />



    </GridItem >


  )
}
import { Box, Button, Image, ListItem, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react";

export function Modal({ handleModal, closeModal, title }) {

  return (
    <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'xl'} isCentered>
      <ModalOverlay />
      <ModalContent>

        <ModalBody pt='0' px='0'>
          <Image src="/images/lanche_2.png" borderRadius={'4px 4px 0 0 '} alt='' />

          <Box px='40px'>
            <Text mt={4} fontWeight='bold' fontSize='2xl'>{title} | R$ 20,00</Text>
            <Text mt={4} fontWeight='bold' fontSize='xl'>Ingredientes:</Text>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button onClick={closeModal}>fechar</Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>

  )
}
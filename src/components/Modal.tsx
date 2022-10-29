import { Box, Button, Image, ListItem, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react";

export function Modal({ handleModal, closeModal, data }) {

  return (
    <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'xl'} isCentered>
      <ModalOverlay />
      <ModalContent>

        <ModalBody pt='0' px='0'>
          <Image src={data.src} borderRadius={'4px 4px 0 0 '} alt='' />

          <Box px='40px'>
            <Text mt={4} fontWeight='bold' fontSize='2xl'>{data.title} | {data.price}</Text>
            <Text mt={4} fontWeight='bold' fontSize='xl'>Ingredientes:</Text>
            <UnorderedList>
              {
                data.ingredientsList.map((item, index) => {
                  return (
                    <ListItem key={index}>{item}</ListItem>
                  )
                })
              }
            </UnorderedList>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => closeModal(false)}>fechar</Button>
        </ModalFooter>

      </ModalContent>
    </ModalChakra>
  )
}
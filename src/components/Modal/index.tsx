import { Box, Button, Flex, Heading, Image, ListItem, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react";
import styles from './Modal.module.css';

export function Modal({ location, handleModal, closeModal, data }) {

  interface ModalProps {
    location: string;
    handleModal: boolean;
    closeModal: any;
    data: any;
  }

  type DataTypes = {
    title: string;
    price: string;
    src: string;
    ingredientsList: string[];

  }


  const modalBodyMenu = (data: DataTypes) => {
    return (
      <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'xl'} isCentered  >
        <ModalOverlay />

        <ModalContent className={styles.modal}>

          <ModalBody pt='0' px='0'>
            <Image src={`/lanches/${data.src}`} borderRadius={'4px 4px 0 0 '} objectFit='cover' w='100%' h='360px' alt='' />

            <Box px='40px'>
              <Text mt={4} fontWeight='bold' fontSize='2xl'>{data.title} | {data.price}</Text>
              <Text mt={4} fontWeight='bold' fontSize='xl'>Ingredientes:</Text>

              <UnorderedList>
                {
                  data.ingredientsList?.map((item, index) => {
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


  const modalBodyHighlight = (data: DataTypes) => {
    return (

      <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'3xl'} isCentered  >
        <ModalOverlay />

        <ModalContent className={`${styles.modal} ${styles.modalHighlight}`}>

          <ModalCloseButton />

          <ModalBody py='0' px='0'>
            <Flex className={styles.modalContentHighlight}>
              <Image src={`/images/${data.src}`} borderRadius={'4px 0 0 4px '} objectFit='cover' w='60%' h='60vh' alt='' />

              <Box py='40px' px='40px'>
                <Heading mt={4} fontSize='2xl'> Provolone | R$ 30,00 </Heading>

                <Box mt={4} fontSize='md'>

                  <Text>
                  </Text>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                  </Text>

                </Box>

                <Text mt={6} mb={2} fontWeight='bold' fontSize='xl'>Ingredientes:</Text>

                <UnorderedList display={'flex'} flexDirection='column' gap={2}>
                  <ListItem >Hamburguer Artesanal</ListItem>
                  <ListItem >Queijo Provolone</ListItem>
                  <ListItem >Maionese</ListItem>
                  <ListItem >Ceblo Roxa</ListItem>
                  <ListItem >Alface</ListItem>
                  <ListItem >Tomate</ListItem>
                </UnorderedList>

              </Box>
            </Flex>
          </ModalBody>

        </ModalContent>
      </ModalChakra >


    )
  }

  return (

    <>
      {location === 'menu' && modalBodyMenu(data)}
      {location === 'highlight' && modalBodyHighlight(data)}
    </>

  )
}
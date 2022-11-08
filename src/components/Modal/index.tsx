import { Box, Button, Flex, Heading, Image, ListItem, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, UnorderedList, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import styles from './Modal.module.scss';

export function Modal({ location, handleModal, closeModal, data, conditional }) {

  type DataTypes = {
    title: string;
    price: string;
    src: string;
    ingredientsList: string[];
    conditional?: string

  }

  type DataTypesProducts = {
    id: number;
    title: string;
    price: string;
    type: string;
    src: string;
    ingredientsList: string[];
    conditional?: string

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
              <Image src={`/lanches/${data.src}`} borderRadius={'4px 0 0 4px '} objectFit='cover' w='60%' alt='' />

              <Box py='40px' px='40px'>
                <Heading mt={4} fontSize='2xl'> Smash Salada Bacon | R$ 30,00 </Heading>

                <Box mt={4} fontSize='md'>

                  <Text>
                    Smash salada com Bacon é a escolha perfeita pra quem não quer gastar muito e comer bem! Toda simplicidade do Smash Salada com adicional de bacon por apenas R$ 2,00. Todo sabor que você procura em um só lugar 😛
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

  const modalBodyProducts = (data: DataTypesProducts[]) => {
    const itemsList = data.filter(item => item.type === conditional)

    return (
      <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'3xl'} isCentered  >
        <ModalOverlay />

        <ModalContent className={styles.modalProducts} h='480px' overflow={'scroll'}>

          <ModalCloseButton />

          <ModalBody>

            <Box mt='20px' mb='60px'>
              <Heading>
                {conditional}
              </Heading>
            </Box>

            <Accordion allowToggle>
              {
                itemsList.map(item => (
                  <AccordionItem key={item.id}>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box flex='1' textAlign='left'>
                          <strong>{item.title}</strong> | {item.price}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {item.ingredientsList.join(',')}
                    </AccordionPanel>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </ModalBody>
        </ModalContent>
      </ModalChakra >


    )
  }

  return (

    <>
      {location === 'menu' && modalBodyMenu(data)}
      {location === 'highlight' && modalBodyHighlight(data)}
      {location === 'products' && modalBodyProducts(data)}

    </>

  )
}
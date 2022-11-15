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

          {
            data.title === 'Nacho Burger' && <Image src='/images/doritos.webp' alt='' position={'absolute'} w='200px' h='auto' mt='20px' ml='330px' />
          }


          {
            data.title === 'Costela Premium' && <Image src='/images/catupiry.webp' alt='' position={'absolute'} w='100px' h='auto' mt='40px' ml='380px' />
          }

          {
            data.title === 'Crocante' && <Image src='/images/pringles.webp' alt='' position={'absolute'} w='120px' h='auto' mt='20px' ml='20px' />
          }


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

      <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'4xl'} isCentered  >
        <ModalOverlay />

        <ModalContent className={`${styles.modal} ${styles.modalHighlight}`}>

          <ModalCloseButton />

          <ModalBody py='0' px='0'>
            <Flex className={styles.modalContentHighlight}>
              <Image src={`/lanches/jack-bacon-2.webp`} borderRadius={'4px 0 0 4px '} objectFit='cover' w='60%' h='auto' alt='' />

              <Box py='40px' px='40px'>
                <Heading mt={4} fontSize='2xl'> Jack Bacon | R$ 28,00 </Heading>

                <Box mt={4} fontSize='md'>

                  <Text mb='12px'>
                    {"A sugestão do chef é o Jack Bacon, criado em 2017. Esse foi o primeiro integrante da família Jeff's"}
                  </Text>

                  <Text>
                    Uma combinação de cebola caramelizada, com cheddar cremoso e muito bacon fazem o seu sucesso ser tão grande 😉
                  </Text>

                </Box>

                <Text mt={6} mb={2} fontWeight='bold' fontSize='xl'>Ingredientes:</Text>

                <UnorderedList display={'flex'} flexDirection='column' gap={2}>
                  <ListItem >Pão Brioche Amanteigado</ListItem>
                  <ListItem >Hambúrguer Artesanal 150g</ListItem>
                  <ListItem >Cheddar Cremoso</ListItem>
                  <ListItem >Bacon</ListItem>
                  <ListItem >Cebola Caramelizada</ListItem>
                  <ListItem >Barbecue</ListItem>
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
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, UnorderedList, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, ModalHeader, useDisclosure, Divider, Link, AlertIcon, Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdCart } from 'react-icons/io'
import { ItemList } from "./ItemList";
import styles from './Modal.module.scss'

export function Modal({ dataApi }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [dataCart, setDataCart] = useState<any[]>([])
  const [handleAlert, setHandleAlert] = useState(false)

  const updateCartProduct = async (productId: number, qtd: number) => {

    try {
      //criando novo array
      const dataArray = [...dataCart]

      //selecionando produto com o mesmo id
      const findItemSelected = dataArray.find(item => item.id === productId)

      if (findItemSelected) {
        findItemSelected.qtd = qtd
      } else {
        const product = dataApi.find(item => item.id === productId)

        const newProduct = {
          ...product,
          qtd
        }
        dataArray.push(newProduct)
      }
      setDataCart(dataArray)

    } catch (e) {
      console.log('Erro ao adicionar produto: ', e);
    }
  }

  //criar array de dados  
  const productsType = dataApi.map(item => item.type)
  const typeProducts = new Set(productsType)

  //Criando totais da sacola
  const totalValues = dataCart.map(item => {
    return {
      qtdItems: item.qtd,
      valueItems: item.qtd * Number(item.price.replace('R$', '').replace(',', '.'))
    }
  })

  const totalItensCount = totalValues.reduce((acc, value) => acc + value.qtdItems, 0)
  const totalItensSum = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValues.reduce((acc, value) => acc + value.valueItems, 0))


  //formatar e enviar pedido
  function sendMessage() {
    if (dataCart.length === 0) {
      setHandleAlert(true)

      setTimeout(() => {
        setHandleAlert(false)

      }, 5000)

      return
    }

    if (!window) {
      return
    } else {
      const numberWhats = '5542999945476'

      const selectItensCart = dataCart.filter(item => item.qtd > 0)

      const listaPedidos = selectItensCart.map((item, index) => {
        return `${item.title} | ${item.qtd}\n`
      }).join('')

      const text = `Olá time, por gentileza me ve ai:\n\n${listaPedidos}\n\nValor total do pedido ${totalItensSum}`
      window.open(`https://api.whatsapp.com/send?phone=${numberWhats}&text=${window.encodeURIComponent(text)}`)

      setDataCart([])
      onClose()
    }
  }


  const dataTest = dataApi.map(item => {

    const selectedQtd = dataCart.find(data => data.id === item.id)

    return {
      id: item.id,
      title: item.title,
      type: item.type,
      price: item.price,
      qtd: selectedQtd && selectedQtd.qtd,
      ingredients: item.ingredients
    }
  })


  return (
    <>



      <Box className={styles.cartBox}>
        <Button className={styles.cartBtn} onClick={onOpen}>
          <IoMdCart />
          <Text ml='8px'>Carrinho</Text>
          {
            totalItensCount > 0 && <Box className={styles.productCount}>{totalItensCount}</Box>
          }
        </Button>
      </Box>

      <ModalChakra onClose={onClose} isOpen={isOpen} size='full' isCentered>
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>Carrinho</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Accordion allowToggle>
              {
                Array.from<any>(typeProducts).map((data, index) => (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <Text fontSize={'xl'} fontWeight={'bold'}>
                            {data}
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <UnorderedList>
                        {
                          dataTest.filter(item => item.type === data).map(item => (
                            <ItemList key={item.id} item={item} updateProduct={updateCartProduct} />
                          ))
                        }
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              }

            </Accordion>

            <Flex w='100%' justify={'flex-end'}>

              <Box border='1px solid #b3b5c6' mt='60px' w='200px' borderRadius={'8px'}>
                <Flex gap={'10px'} h='40px' pl='6px' align={'center'} borderBottom='1px solid #b3b5c6'>
                  <strong> N° de itens:</strong> {totalItensCount}
                </Flex>

                <Flex gap={'10px'} h='40px' align={'center'} pl='6px'>
                  <strong>Valor Total:</strong> {totalItensSum}
                </Flex>
              </Box>

            </Flex>

            {
              handleAlert && (
                <Alert
                  status='warning'
                  variant='subtle'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  textAlign='center'
                  height='200px'
                  borderRadius={'12px'}
                  mt='60px'
                >
                  <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Atenção!
                  </AlertTitle>
                  <AlertDescription maxWidth='sm'>
                    Insira pelo menos um produto no carrinho para realizar um pedido!
                  </AlertDescription>
                </Alert>
              )
            }

          </ModalBody>
          <ModalFooter display={'flex'} gap='16px'>
            <Button onClick={onClose}>Fechar</Button>
            <Button onClick={sendMessage} colorScheme={'green'}>Enviar pedido por WhatsApp</Button>

          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>

  )
}
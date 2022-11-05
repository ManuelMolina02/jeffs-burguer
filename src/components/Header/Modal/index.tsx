/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, UnorderedList, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, ModalHeader, useDisclosure, Divider, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdCart } from 'react-icons/io'
import { ItemList } from "./ItemList";
import styles from './Modal.module.scss'

export function Modal({ dataApi }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [dataProducts, setDataProducts] = useState<any[]>([])

  const addProduct = async (productId: number, qtd: number) => {

    try {
      //criando novo array
      const dataArray = [...dataProducts]

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
      setDataProducts(dataArray)

    } catch (e) {
      console.log('Erro ao adicionar produto: ', e);
    }
  }

  //criar array de dados  
  const productsType = dataApi.map(item => item.type)
  const typeProducts = new Set(productsType)

  //Criando totais da sacola
  const test = dataProducts.map(item => {
    return {
      qtdItems: item.qtd,
      valueItems: item.qtd * Number(item.price.replace('R$', '').replace(',', '.'))
    }
  })


  const totalItensCount = test.reduce((acc, value) => acc + value.qtdItems, 0)
  const totalItensSum = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(test.reduce((acc, value) => acc + value.valueItems, 0))


  //formatar e enviar pedido

  const numberWhats = '5542999945476'

  const listaPedidos = dataProducts.map((item, index) => {
    return `${item.title} | ${item.qtd}\n`
  }).join('')

  const text = `Olá time, por gentileza me ve ai:\n\n${listaPedidos}\n\nValor total do pedido ${totalItensSum}`

  const textWhats = () => { !window ? '' : window.encodeURIComponent(text) };

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
                          dataApi.filter(item => item.type === data).map(item => (
                            <ItemList key={item.id} item={item} addProduct={addProduct} />
                          ))
                        }
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              }

            </Accordion>

            <Divider />

            <Flex gap='20px'>
              <Text>
                N° de itens: {totalItensCount}
              </Text>

              <Text>
                Valor Total: {totalItensSum}
              </Text>
            </Flex>

          </ModalBody>
          <ModalFooter display={'flex'} gap='16px'>
            <Button onClick={onClose}>Fechar</Button>
            <Link href={` https://api.whatsapp.com/send?phone=${numberWhats}&text=${!window ? '' : window.encodeURIComponent(text)}`} target='_blank' _focus={{ border: 'none' }} _hover={{ textDecor: 'none' }} >
              <Button colorScheme={'green'}>Enviar pedido por WhatsApp</Button>

            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>

  )
}
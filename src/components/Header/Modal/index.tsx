/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, UnorderedList, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, ModalHeader, useDisclosure, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdCart } from 'react-icons/io'
import { ItemList } from "./ItemList";
import styles from './Modal.module.css'

export function Modal({ dataApi }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [handleItem, setHandleItem] = useState<any>()

  const [dataItems, setDataItems] = useState<any[]>([])

  const [testItems, setTestItems] = useState<any[]>([])

  const testData = dataApi.map(data => {
    return {
      id: data.id,
      title: data.title,
      price: data.price,
      type: data.type,
      qtd: 0
    }
  })

  /*
    useEffect(() => {
      if (handleItem.name !== '') {
        const filterItems = dataItems.filter(item => item.name !== handleItem.name)
  
        if (!filterItems) {
          setDataItems([...dataItems, handleItem])
        } else {
          setDataItems([...filterItems, handleItem])
        }
      }
    }, [handleItem])
  
    useEffect(() => {
      const test = dataItems.map(item => {
        return {
          qtdItems: item.qtd,
          valueItems: item.qtd * Number(item.price.replace('R$', '').replace(',', '.'))
        }
      })
      setTestItems(test)
  
    }, [dataItems])
  

    const totalItensCount = testItems.reduce((acc, value) => acc + value.qtdItems, 0)
    const totalItensSum = testItems.reduce((acc, value) => acc + value.valueItems, 0)
  
    console.log(dataItems);
  
    console.log(totalItensSum);
  
  
    const listaPedidos = dataItems.map((item, index) => {
      return `${item.name} | ${item.qtd}\n`
    }).join('')
  
    const pedidoFormado = `
  Olá time, por gentileza me ve ai:
  
  ${listaPedidos}
  
  Valor total do pedido ${totalItensSum}
    `
  */
  //criar array de dados  
  const productsType = dataApi.map(item => item.type)
  const typeProducts = new Set(productsType)

  const totalItensCount = 0
  const totalItensSum = 0

  //item selecionado



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
                          testData.filter(item => item.type === data).map(item => (
                            <ItemList key={item.id} item={item} requests={{ handleItem, setHandleItem, setDataItems }} dataItems={dataItems} />
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
                Total itens: {totalItensCount}
              </Text>

              <Text>
                Total valor: R$ {totalItensSum}
              </Text>
            </Flex>

          </ModalBody>
          <ModalFooter display={'flex'} gap='16px'>
            <Button onClick={onClose}>Fechar</Button>
            <Button onClick={onClose} colorScheme='green'>Enviar pedido por WhatsApp</Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>

  )
}
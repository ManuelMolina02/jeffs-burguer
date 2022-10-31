import { Box, Button, Drawer as DrawerChakra, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Link, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { FaMoneyBillAlt, FaMoneyCheckAlt, FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

export function Drawer() {
  const numberWhats = '5542999945476'
  const textWhats = 'Olá, gostaria de fazer um pedido! Seu pau no cu!'

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} position='fixed' top={'20px'} right={'20px'} bg={'white'} zIndex='100' border={' 1px solid #C2C2C2'} px='10px' >
        <GiHamburgerMenu color="#808080" size={'22px'} />
      </Button>

      <DrawerChakra onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu de Acessos</DrawerHeader>
          <DrawerCloseButton mt='6px' />

          <DrawerBody display={'flex'} flexDirection='column' gap='26px' mt='30px'>

            <Link href={`#`} _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Quem Somos</Text>
              </Flex>
            </Link>

            <Link href={`#products`} _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Produtos</Text>
              </Flex>
            </Link>

            <Link href={`#highlight`} _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Sugestão do Chef</Text>
              </Flex>
            </Link>

            <Link href={`#menu`} _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Cardápio Completo</Text>
              </Flex>
            </Link>

            <Link href={` https://api.whatsapp.com/send?phone=${numberWhats}&text=${textWhats}`} target='_blank' _focus={{ border: 'none' }}>
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Fazer pedido via WhatsApp</Text>
              </Flex>
            </Link>

            <Link href={`#`} target='_blank' _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Fazer pedido via Aiboo</Text>
              </Flex>
            </Link>

          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}
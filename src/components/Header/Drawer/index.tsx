import { Box, Button, Drawer as DrawerChakra, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Link, Text, useDisclosure } from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Drawer.module.scss'
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

export function Drawer() {
  const numberWhats = '5542999945476'
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button title='access menu' className={styles.btnDrawer} onClick={onOpen}>
        <GiHamburgerMenu color="#808080" size={'22px'} />
      </Button>

      <DrawerChakra onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu de Acessos</DrawerHeader>
          <DrawerCloseButton mt='6px' />

          <DrawerBody display={'flex'} flexDirection='column' justifyContent={'space-between'} my='30px'>

            <Flex flexDir={'column'} gap='12px'>
              <Link href={`#products`} _focus={{ border: 'none' }} onClick={onClose}>
                <Flex fontSize={20} align='center' gap={2}>
                  <Text>Produtos</Text>
                </Flex>
              </Link>

              <Link href={`#about`} _focus={{ border: 'none' }} onClick={onClose}>
                <Flex fontSize={20} align='center' gap={2}>
                  <Text>{"Sobre Jeff's"}</Text>
                </Flex>
              </Link>

              <Link href={`#highlight`} _focus={{ border: 'none' }} onClick={onClose}>
                <Flex fontSize={20} align='center' gap={2}>
                  <Text>Sugestão do Chef</Text>
                </Flex>
              </Link>

              <Link href={`#menu`} _focus={{ border: 'none' }} onClick={onClose}>
                <Flex fontSize={20} align='center' gap={2}>
                  <Text>Cardápio Completo</Text>
                </Flex>
              </Link>

            </Flex>

            <Flex flexDir={'column'} gap='12px'>
              <Text fontWeight='bold'>
                Nos contate através das redes sociais
              </Text>
              <Link href={` https://api.whatsapp.com/send?phone=${numberWhats}`} target='_blank' _focus={{ border: 'none' }}>
                <Flex fontSize={16} align='center' gap={2}>
                  <IoLogoWhatsapp size={22} />
                  <Text>WhatsApp</Text>
                </Flex>
              </Link>

              <Link href={`https://www.instagram.com/jeffshamburguer/`} target='_blank' _focus={{ border: 'none' }}>
                <Flex fontSize={16} align='center' gap={2}>
                  <AiFillInstagram size={22} />
                  <Text>Instagram</Text>
                </Flex>
              </Link>

              <Link href={`https://play.google.com/store/apps/details?id=com.aiboo.food&hl=pt_BR&gl=US`} target='_blank' _focus={{ border: 'none' }} >
                <Flex fontSize={16} align='center' gap={2}>
                  <Image src="/aiboo1.svg" boxSize={18} alt='' ml='2px' />
                  <Text>Aiboo</Text>
                </Flex>
              </Link>
            </Flex>

          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}
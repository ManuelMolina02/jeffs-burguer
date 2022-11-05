import { Button, Drawer as DrawerChakra, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, Text, useDisclosure } from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Drawer.module.scss'

export function Drawer() {
  const numberWhats = '5542999945476'
  const textWhats = 'Olá, gostaria de fazer um pedido!'
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

          <DrawerBody display={'flex'} flexDirection='column' gap='26px' mt='30px'>

            <Link href={`#`} _focus={{ border: 'none' }} onClick={onClose}>
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Quem Somos</Text>
              </Flex>
            </Link>

            <Link href={`#products`} _focus={{ border: 'none' }} onClick={onClose}>
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Produtos</Text>
              </Flex>
            </Link>

            <Link href={`#highlight`} _focus={{ border: 'none' }} onClick={onClose}>
              <Flex fontSize={16} align='center' gap={2}>
                <Text>Sugestão do Chef</Text>
              </Flex>
            </Link>

            <Link href={`#menu`} _focus={{ border: 'none' }} onClick={onClose}>
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
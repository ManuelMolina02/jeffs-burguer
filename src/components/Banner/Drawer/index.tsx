import { Button, Drawer as DrawerChakra, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

export function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  return (
    <>

      <Button onClick={onOpen} position='fixed' top={'20px'} right={'20px'} bg={'white'} zIndex='100' border={' 1px solid #C2C2C2'} px='10px' >
        <GiHamburgerMenu color="#808080" size={'22px'} />
      </Button>

      <DrawerChakra onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu de Acessos</DrawerHeader>
          <DrawerBody display={'flex'} flexDirection='column' gap='26px' mt='30px'>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Fazer pedido via whats app</p>
            <p>Fazer pedido via Aiboo</p>
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}
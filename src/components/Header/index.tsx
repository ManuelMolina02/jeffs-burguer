import { Box, Flex, Image } from "@chakra-ui/react";
import { Drawer } from "./Drawer";
import { Modal } from './Modal'

export function Header({ data }) {
  return (
    <header>
      <Flex
        w='100%'
        h='52px'
        gap={'12px'}
        align={'end'}
        justify={'flex-end'}
        bg='black'
        pt={14}
      >
        {/*
        <Image src='/logo.png' alt='logo' boxSize="66px" />
       */}

        <Flex gap={4} position='fixed' zIndex='100' mr='20px'>
          <Modal dataApi={data} />
          <Drawer />
        </Flex >
      </Flex>
    </header>
  )
}
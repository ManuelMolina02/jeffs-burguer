import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <header>
      <Flex
        w='100%'
        h='52px'
        gap={'12px'}
        align={'center'}
        justify={'center'}
        bg='black'
        pt={14}

      >
        <Image src='/logo.png' alt='logo' boxSize="66px" />
      </Flex>
    </header>
  )
}
import { Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <header>
      <Flex
        w='100%'
        h='72px'
        gap={'12px'}
        align={'center'}
        justify={'center'}
        bg='black'
        pt={10}
      >

        <Image src='/logo.png' alt='logo' boxSize="66px" />



      </Flex>
    </header>
  )
}
import { Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <header>
      <Flex
        align={'center'}
        justify={'center'}
        w='100%'
        h='72px'
        gap={'12px'}
        bg={'#77212E'}
      >

        <Image src='/logo.svg' alt='logo' boxSize="26px" />

        <Text
          fontSize={'2xl'}
          color={'white'}
        >
          Jeffs Burguer
        </Text>

      </Flex>
    </header>
  )
}
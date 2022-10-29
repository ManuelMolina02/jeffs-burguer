import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      align={"center"}
      justify={"flex-start"}
      bgImage={"url('/images/banner3.png')"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"660px"}
    >
      <VStack
        w={'380px'}
        align={'start'}
        ml={'100px'}
        color={'white'}
      >
        <Text fontSize={40} fontWeight={'bold'}>
          Teste de Título
        </Text>

        <Text>
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
        </Text>
      </VStack>


    </Flex>
  )
}
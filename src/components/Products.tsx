import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { CardSection } from "./CardSection";

export function Products() {
  return (

    <Box h={'496px'} bg='#F6F2E9'>

      <Flex align={'center'}>

        <Image src='/background.svg' alt='logo'
          w={'420px'}
          objectFit={'cover'}
          flexDirection={'column'}
        />

        <SimpleGrid columns={3} position={'relative'}>
          <CardSection title={'Hamburguers'} description={'Lorem Ipsum is simply dummy text of the typesetting industry Ipsum is simply.'} />
          <CardSection title={'Hot Dog'} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply. '} />
          <CardSection title={'Bebidas'} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply'} />
        </SimpleGrid>

      </Flex>

      <Image src='/mosaico.svg' alt='logo'
        position={'relative'}
        bottom={'12'}
        w={'100%'}
        h={'52px'}
        display={'block'}
        objectFit={'cover'}
      />
    </Box>
  )
}
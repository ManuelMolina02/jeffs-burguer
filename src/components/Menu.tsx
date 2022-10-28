import { Flex, Grid, Text } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

export function Menu() {
  return (
    <Flex >
      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
        m='60px auto'
        gap={12}
      >

        <Text color='black' fontSize={28} maxW='780px' textAlign={'center'} mb='40px'>
          Faça já seu pedido e experimente nossos deliciosos lanches e hamburgueres artesanais. Você vai se surpreender!
        </Text>

        <Grid templateColumns={['repeat(3, 1fr)']} gap={16} >
          <CardItem title='lanche frango' image='' />
          <CardItem title='lanche de costela' image='' />
          <CardItem title='hamburguer teste' image='' />
          <CardItem title='jack bacon' image='' />
          <CardItem title='hamburguer teste1' image='' />
          <CardItem title='hamburguer teste23' image='' />
          <CardItem title='hamburguer teste' image='' />
          <CardItem title='jack bacon' image='' />
          <CardItem title='hamburguer teste1' image='' />
          <CardItem title='hamburguer teste' image='' />
          <CardItem title='jack bacon' image='' />
          <CardItem title='hamburguer teste1' image='' />
        </Grid>


      </Flex>
    </Flex>
  )
}
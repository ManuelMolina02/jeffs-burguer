import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

export function Menu() {
  return (
    <Flex>
      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
        m='60px auto'
        gap={12}
      >
        <Text color='black' fontSize={28} w='620px' textAlign={'center'} mb='40px'>
          Veja as opções do nosso cardápio completo com deliciosos lanches e hamburgueres artesanais. Você vai se surpreender!
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
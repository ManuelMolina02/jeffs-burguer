import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

export function Menu({ itensMenu }) {




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

          {
            itensMenu.map(item => (
              <CardItem key={item.id} title={item.name} image={item.image} />
            ))

          }
        </Grid>

      </Flex>
    </Flex>

  )
}
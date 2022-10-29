import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

export function Menu({ cards }) {

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
            cards.map(item => (
              <CardItem key={item.id} cardData={item} />
            ))
          }
        </Grid>
      </Flex>
    </Flex>

  )
}
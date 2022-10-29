import { Flex, Grid, Text } from "@chakra-ui/react";
import { CardItem } from "../CardItem";
import styles from './Menu.module.css';

export function Menu({ cards }) {

  return (
    <Flex bg='#F5E4E4'>
      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
        m='60px auto'
        gap={12}
      >
        <Text color='black' fontSize={28} w={{ sm: '320px', md: '480px', lg: '620px' }} textAlign={'center'} mb='40px'>
          Veja as opções do nosso cardápio completo com deliciosos lanches e hamburgueres artesanais. Você vai se surpreender!
        </Text>

        <Grid className={styles.gridStyles} gap={16} >
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
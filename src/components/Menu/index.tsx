import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { CardItem } from "../Card";
import styles from './Menu.module.scss';

export function Menu({ cards }) {

  return (
    <Flex id='menu' bg='#F5E4E4' flexDirection={'column'}>
      <Image src='/images/mosaico.svg' alt='logo'
        position={'relative'}
        top='-1px'
        w={'100%'}
        h={'52px'}
        display={'block'}
        objectFit={'cover'}
      />

      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
        m='60px auto'
        gap={12}

        className={styles.menuContent}
      >
        <Text className={styles.descriptionMenu} mb='40px'>
          Veja as opções do nosso cardápio completo com deliciosos lanches e hamburgueres artesanais.  <br />Você vai se surpreender!
        </Text>

        <Grid className={styles.gridMenu} gap={16} >
          {
            cards.map(item => (
              <CardItem key={item.id} cardData={item} />
            ))
          }
        </Grid>

        <Box className={styles.descriptionMenu} mt='40px'>
          <Text>
            Aproveite o momento e viva essa experiência culinária.
            <br />
            Faça seu pedido agora!
          </Text>

        </Box>

      </Flex>


      <Box position={'relative'} bottom='-34px'>
        <Image src="/images/divider_footer.png" w='100%' objectFit={'cover'} alt='' />
      </Box>
    </Flex>

  )
}
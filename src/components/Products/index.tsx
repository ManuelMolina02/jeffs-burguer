import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { CardSection } from "../CardSection";
import styles from './Products.module.css';

export function Products() {
  return (

    <Box className={styles.products} bg='#F6F2E9'>

      <Flex align={'center'}>

        <Image src='/background.svg' alt='logo'
          className={styles.bgImage}
          w={'420px'}
          objectFit={'cover'}
          flexDirection={'column'}
        />

        <Box className={styles.cardsProducts} >
          <CardSection title={'Hamburguers'} description={'Lorem Ipsum is simply dummy text of the typesetting industry Ipsum is simply.'} />
          <CardSection title={'Hot Dog'} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply. '} />
          <CardSection title={'Bebidas'} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply'} />
        </Box>

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

import { Box, Flex, Image } from "@chakra-ui/react";
import { CardSection } from "./CardSection";
import styles from './Products.module.css';

export function Products({ data }) {


  return (
    <Box className={styles.products} bg='#F6F2E9'>

      <Flex align={'center'}>
        <Image src='/background.svg' alt='logo'
          className={styles.bgImage}
          w={'420px'}
          objectFit={'cover'}
          flexDirection={'column'}
        />

        <Box className={styles.cardsProducts}>
          <CardSection title={'Hambúrguer'} data={data} description={'Lorem Ipsum is simply dummy text of the typesetting industry Ipsum is simply.'} />
          <CardSection title={'Smash'} data={data} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply'} />
          <CardSection title={'Hot Dog'} data={data} description={'Lorem Ipsum is simply dummy text of the  typesetting industry Ipsum is simply. '} />
        </Box>
      </Flex>



      <Image src='/mosaico.svg' alt='logo'
        position={'relative'}
        w={'100%'}
        h={'52px'}
        display={'block'}
        objectFit={'cover'}
      />
    </Box>
  )
}
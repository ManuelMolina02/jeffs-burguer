
import { Box, Flex, Image } from "@chakra-ui/react";
import { CardSection } from "./CardSection";
import styles from './Products.module.scss';

export function Products({ data }) {


  return (
    <Box id='products' className={styles.products} bg='#F6F2E9'>

      <Flex align={'center'}>
        <Image src='/background.svg' alt='logo'
          className={styles.bgImage}
          w={'420px'}
          objectFit={'cover'}
          flexDirection={'column'}
        />

        <Box className={styles.cardsProducts}>
          <CardSection title={'Hambúrguer'} data={data} description={'Hambúrguers especiais são a escolha perfeita para você que está com fome!'} />
          <CardSection title={'Smash'} data={data} description={'Smashs são uma experiência ideal para quem curte um hambúrguer clássico.'} />
          <CardSection title={'Hot Dog'} data={data} description={'Pra você que gosta das novidades, temos oito hot dogs prensados deliciosos.'} />
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
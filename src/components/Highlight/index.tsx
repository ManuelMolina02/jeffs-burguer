import { Button, Flex, Image, Text } from "@chakra-ui/react";
import styles from './Highlight.module.css';

export function Highlight() {
  return (
    <Flex className={styles.highlight} bg='#77212E'>
      <Flex className={styles.boxImages}>
        <Image src='/images/lanche_2.png' alt='logo' />
      </Flex>

      <Flex w='420px' color={'white'} flexDirection={'column'} justify='center' gap={8}>
        <Text fontSize={'32px'}>Sugestão do Chef</Text>
        <Text fontSize={'22px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</Text>
        <Button variant={'outline'} size='lg' _hover={{ color: '#77212E', bg: 'white' }}>
          ver mais
        </Button>
      </Flex>
    </Flex>
  )
}
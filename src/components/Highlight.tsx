import { Button, Flex, Image, Text } from "@chakra-ui/react";

export function Highlight() {
  return (
    <Flex bg='#77212E' h='480px'>
      <Flex m='auto 0'>
        <Image src='/images/lanche_2.png' alt='logo'
          w={'440px'}
          h={'280px'}
          objectFit={'cover'}
          borderRadius={'12px'}
          boxShadow={'-6px -6px 6px 4px rgba(0, 0, 0, 0.25)'}
          opacity={0.5}
          position={'relative'}

          ml='200px'
        />

        <Image src='/images/lanche_2.png' alt='logo'
          w={'440px'}
          h={'280px'}
          objectFit={'cover'}
          borderRadius={'12px'}
          boxShadow={'-6px -6px 6px 4px rgba(0, 0, 0, 0.25)'}

          position={'relative'}
          zIndex={1}
          ml='-410px'
          mt='30px'
        />
      </Flex>

      <Flex w='420px' color={'white'} flexDirection={'column'} justify='center' ml='60px' gap={8}>
        <Text fontSize={'32px'}>Sugestão do Chef</Text>
        <Text fontSize={'22px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</Text>
        <Button variant={'outline'} size='lg'>
          ver mais
        </Button>
      </Flex>
    </Flex>
  )
}
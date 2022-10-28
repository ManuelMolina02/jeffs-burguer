import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

export function CardSection({ title, description }) {
  return (
    <VStack
      spacing={8} p={8}
      textAlign='center'
      align='center'
      justify={'center'}
    >

      <Box
        color={'#E95B2D'}
        display='flex'
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Text fontSize={40}
          fontWeight={'bold'}>
          {title}
        </Text>

        <Image src='/images/divider.svg' w={32} alt='logo' />
      </Box>

      <Text
        color={'#777777'}
        fontSize={22} >
        {description}
      </Text>

      <Button
        color={'#E95B2D'}
        borderColor={'#E95B2D'}
        variant='outline'
        _hover={{
          bg: '#E95B2D',
          color: '#fff'
        }}>
        ver mais
      </Button>
    </VStack>
  )
}
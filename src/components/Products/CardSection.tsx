import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

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
        <Heading fontSize={40}>
          {title}
        </Heading>

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
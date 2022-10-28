import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";

export function Orders() {

  const textWhats = 'Olá, gostaria de fazer um pedido! Seu pau no cu!'


  return (
    <Flex bg='#77212E' h='480px' justify={'center'} align='center' gap={12} flexDirection='column'>

      <Text color='black' fontSize={26} maxW='620px' textAlign={'center'} mt='40px'>
        Faça já seu pedido e experimente nossos deliciosos lanches e hamburgueres artesanais. Você vai se surpreender!
      </Text>

      <Flex gap={12}>
        <Button w='120px' size='lg'

        >
          <a href={`https://api.whatsapp.com/send/?phone=554299945476&text=${textWhats}&type=phone_number&app_absent=0`} >whatsapp</a>

        </Button>

        <Button w='120px' size='lg'>
          insta
        </Button>


        <Button w='120px' size='lg'>
          ifood
        </Button>
      </Flex>


    </Flex>
  )
}
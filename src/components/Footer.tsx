import { Flex, Grid, Image, Text } from "@chakra-ui/react";

export function Footer() {
  const textWhats = 'Olá, gostaria de fazer um pedido! Seu pau no cu!'

  return (
    <>
      <Flex bg='white' flexDirection='column' pb={12}>
        <Image src="/images/divider_4.png" alt='' />

        <Flex fontSize={20} m='20px 0' borderBottom={'solid 2px #C7C7C7'}>
          <Text pl='16px' pb='16px'>
            Faça já seu pedido através das nossas redes sociais!
          </Text>
        </Flex>

        <Grid templateColumns={'repeat(4, 1fr)'} gap={16} px='60px'>
          <Flex gap={6} flexDirection='column' align={'start'} pb={8}>
            <Text fontSize={20} fontWeight='bold'>
              Horário de Atendimento
            </Text>

            <Text>
              teste teste teste asda sdsad asdas asd a asdas dasd asdas dasd asd asdas dsdas asd a asdas dasd asdas dasd asd asdas ddasd asd
            </Text>
          </Flex>

          <Flex gap={6} flexDirection='column'>
            <Text fontSize={20} fontWeight='bold'>
              Formas de Pagamento
            </Text>

            <Text fontSize={16} >
              Cartão de Crédito/ Débito
            </Text>

            <Text fontSize={16} >
              PIX
            </Text>

            <Text fontSize={16} >
              Dinheiro
            </Text>
          </Flex>

          <Flex gap={6} flexDirection='column'>
            <Text fontSize={20} fontWeight='bold'>
              Redes Sociais
            </Text>

            <Text fontSize={16} >
              Instagram
            </Text>

            <Text fontSize={16} >
              Facebook
            </Text>

            <Text fontSize={16} >
              WhatsApp
            </Text>
          </Flex>

          <Flex gap={6} flexDirection='column'>
            <Text fontSize={20} fontWeight='bold'>
              Teste teste
            </Text>

            <Text fontSize={16} >
              teste 1
            </Text>

            <Text fontSize={16} >
              teste 2
            </Text>

            <Text fontSize={16} >
              teste 3
            </Text>
          </Flex>
        </Grid>
      </Flex>

      <Flex h='60px' bg='#EEEEEE' align={'center'} justify={'center'}>
        <Text>
          © 2022 Developed by Manuel Molina
        </Text>
      </Flex>
    </>
  )
}
import { Box, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { BsFillCreditCardFill } from 'react-icons/bs'
import { FaMoneyBillAlt, FaMoneyCheckAlt, FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import styles from './Footer.module.css'

export function Footer() {
  const textWhats = 'Olá, gostaria de fazer um pedido! Seu pau no cu!'

  return (
    <>
      <Flex className={styles.footer} bg='white' flexDirection='column' pb={12}>
        <Image src="/images/_4.png" alt='' />

        <Flex fontSize={20} m='20px 0' borderBottom={'solid 2px #C7C7C7'}>
          <Text pl='16px' pb='16px'>
            Faça já seu pedido através das nossas redes sociais!
          </Text>
        </Flex>

        <Box className={styles.footerContent} gap={16}  >
          <Box className={styles.footerColumn}>
            <Text fontSize={20} fontWeight='bold'>
              Horário de Atendimento
            </Text>

            <Text>
              Atendimento de Quarta-feira à Domingo das 19:00 às 23:00. Estamos fechados às segundas e terças-feiras.
            </Text>

          </Box>

          <Box className={styles.footerColumn}>
            <Text fontSize={20} fontWeight='bold'>
              Formas de Pagamento
            </Text>

            <Flex fontSize={16} align='center' gap={2}>
              <BsFillCreditCardFill size={22} />

              <Text>Cartão de Crédito/ Débito</Text>
            </Flex>

            <Flex fontSize={16} align='center' gap={2}>
              <FaMoneyCheckAlt size={22} />

              <Text>PIX</Text>
            </Flex>

            <Flex fontSize={16} align='center' gap={2}>
              <FaMoneyBillAlt size={22} />

              <Text>Dinheiro</Text>
            </Flex>
          </Box>

          <Box className={styles.footerColumn}>

            <Text fontSize={20} fontWeight='bold'>
              Redes Sociais
            </Text>

            <Flex fontSize={16} align='center' gap={2}>
              <IoLogoWhatsapp size={22} />

              <Text>WhatsApp</Text>
            </Flex>


            <Flex fontSize={16} align='center' gap={2}>
              <AiFillInstagram size={22} />

              <Text>Instagram</Text>
            </Flex>

            <Flex fontSize={16} align='center' gap={2}>
              <Image src="/aiboo.png" boxSize={22} alt='' />

              <Text>Aiboo</Text>
            </Flex>


          </Box>

          <Box className={styles.footerColumn}>
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
          </Box>
        </Box>
      </Flex>

      <Flex h='60px' bg='#EEEEEE' align={'center'} justify={'center'}>
        <Text>
          © 2022 Developed by <Link fontWeight='bold' target='_blank' href="http://www.linkedin.com/in/manuel-angel-berger-molina-ba08b3174/">Manuel Molina</Link>
        </Text>
      </Flex>
    </>
  )
}
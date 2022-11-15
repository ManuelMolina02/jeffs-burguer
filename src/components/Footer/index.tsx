import { useState } from 'react'
import { Box, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { BsFillCreditCardFill } from 'react-icons/bs'
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import styles from './Footer.module.scss'
import { Modal } from "../Modal";

export function Footer() {
  const numberWhats = process.env.NUMBER_WHATS

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Flex className={styles.footer} bg='white' flexDirection='column' pb={12}>
        <Box height={'80px'} display='flex' alignItems={'center'} justifyContent='center' flexDir={'column'}>

          <Image src="/images/divider_footer.webp" w='100%' h='auto' objectFit={'cover'} alt='' position={'absolute'} mt='-6px' maxW='1580px' />

          <Box w='100%' h='50%' bg='#F5E4E4' border={'none'}>

          </Box>
          <Box w='100%' h='50%' bg='#ffffff' border={'none'}>
          </Box>

        </Box>
        <Flex fontSize={20} borderBottom={'solid 2px #C7C7C7'}>
          <Text pl='16px' pb='16px'>
            Nos acompanhe através das redes sociais!
          </Text>
        </Flex>

        <Box className={styles.footerContent} gap={16}  >
          <Box className={styles.footerColumn} maxW='360px'>
            <Text fontSize={20} fontWeight='bold'>
              Atendimento
            </Text>

            <Text>
              De <strong>quinta-feira à domingo das 19:00 às 23:00</strong>. Estamos fechados às segundas e quartas-feiras.
            </Text>

            <Text fontSize={16} >
              Rua Helbert Mercer, N° 1410. Centro, Tibagi - PR
            </Text>

          </Box>

          <Box className={styles.footerColumn}>
            <Text fontSize={20} fontWeight='bold'>
              Formas de Pagamento
            </Text>

            <Flex fontSize={16} align='center' gap={2} onClick={() => setShowModal(true)}>
              <BsFillCreditCardFill size={22} />
              <Text>Cartão de Crédito/ Débito</Text>
            </Flex>

            <Flex fontSize={16} align='center' gap={2} onClick={() => setShowModal(true)}>
              <FaMoneyCheckAlt size={22} />
              <Text>PIX</Text>
            </Flex>

            <Flex fontSize={16} align='center' gap={2} onClick={() => setShowModal(true)}>
              <FaMoneyBillAlt size={22} />
              <Text>Dinheiro</Text>
            </Flex>
          </Box>

          <Box className={styles.footerColumn}>

            <Text fontSize={20} fontWeight='bold'>
              Redes Sociais
            </Text>

            <Link href={` https://api.whatsapp.com/send?phone=${numberWhats}`} target='_blank' _focus={{ border: 'none' }}>
              <Flex fontSize={16} align='center' gap={2}>
                <IoLogoWhatsapp size={22} />
                <Text>WhatsApp</Text>
              </Flex>
            </Link>

            <Link href={`#`} target='_blank' _focus={{ border: 'none' }}>
              <Flex fontSize={16} align='center' gap={2}>
                <AiFillInstagram size={22} />
                <Text>Instagram</Text>
              </Flex>
            </Link>

            <Link href={`#`} _focus={{ border: 'none' }} >
              <Flex fontSize={16} align='center' gap={2}>
                <Image src="/aiboo1.png" boxSize={18} alt='' ml='2px' />
                <Text>Aiboo</Text>
              </Flex>
            </Link>

          </Box>

        </Box>
      </Flex>

      <Modal handleModal={showModal} closeModal={setShowModal} data={{}} location='footer' conditional={''} />


      <Flex h='60px' bg='#EEEEEE' align={'center'} justify={'center'}>
        <Text>
          © 2022 Developed by <Link fontWeight='bold' target='_blank' href="http://www.linkedin.com/in/manuel-angel-berger-molina-ba08b3174/">Manuel Molina</Link>
        </Text>
      </Flex>
    </>
  )
}
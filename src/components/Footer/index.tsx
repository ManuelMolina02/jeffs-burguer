import { useState } from 'react'
import { Box, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { BsFillCreditCardFill } from 'react-icons/bs'
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import styles from './Footer.module.scss'
import { Modal } from "../Modal";

export function Footer() {
  const numberWhats = '5542999945476'
  const text = `Olá time, por gentileza me ve ai:\n\nJack Bacon | 1\nJack Rodeio | 2\n\nValor total do pedido R$ 75,00`

  const textWhats = () => { !window ? '' : window.encodeURIComponent(text) };


  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Flex className={styles.footer} bg='white' flexDirection='column' pb={12}>
        {/*
          <Image src="/images/_4.png" alt='' />
        */}

        <Flex fontSize={20} m='20px 0' borderBottom={'solid 2px #C7C7C7'}>
          <Text pl='16px' pb='16px'>
            Nos contate através das redes sociais!
          </Text>
        </Flex>

        <Box className={styles.footerContent} gap={16}  >
          <Box className={styles.footerColumn}>
            <Text fontSize={20} fontWeight='bold'>
              Horário de Atendimento
            </Text>

            <Text>
              Atendimento de Quinta-feira à Domingo das 19:00 às 23:00. Estamos fechados às segundas e terças-feiras.
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

            <Link href={` https://api.whatsapp.com/send?phone=${numberWhats}&text=${textWhats}`} target='_blank' _focus={{ border: 'none' }}>
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

          <Box className={styles.footerColumn}>
            <Text fontSize={20} fontWeight='bold'>
              Endereço Jeffs
            </Text>

            <Text fontSize={16} >
              Rua Helbert Mercer, N° 1410 <br />
              Tibagi Paraná
            </Text>



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
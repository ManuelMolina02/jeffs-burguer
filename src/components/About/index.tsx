import { useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './About.module.scss';
import Zoom from 'react-reveal/Zoom';

export function About() {

  const historyData = [
    {
      id: 1,
      time: '+20',
      title: 'receitas no cardápio',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },
    {
      id: 2,
      time: '10',
      title: 'anos no mercado',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },
    {
      id: 3,
      time: '7',
      title: 'especializações culinárias',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },
    {
      id: 4,
      time: '+6',
      title: 'hamburguers especiais',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },
    {
      id: 5,
      time: '+4',
      title: 'molhos artesanais',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },
  ]

  return (

    <Flex
      id='about'
      flexDir={'column'}
      align='center'
      bg='#F5E4E4'
      className={styles.about}
    >
      <Zoom top delay={500}>
        <Text mb='40px' fontSize={'1.6rem'} maxW={'680px'} textAlign='center' mt='60px'>
          Conheça mais sobre o trabalho e trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias
        </Text>
      </Zoom>


      <Box className={styles.aboutContent}>
        <Box display={'flex'} justifyContent='flex-end' mr='60px'>
          <Zoom left delay={275}>
            <Image src='/images/jeff.webp' alt='logo'
              w={'360px'}
              h={'540px'}
              objectFit={'cover'}
              borderRadius='12px'
              position={'sticky'}
              top='40px'
              mb='40px'
              mt='16px'
              boxShadow={'4px 4px 9px #00000078;'}
            />
          </Zoom>
        </Box>


        <Box>

          {
            historyData.map((item) => {
              return (
                <Box key={item.id} className={styles.historyItem}>
                  <Zoom right delay={375}>


                    <Box display={'flex'} textAlign='start' alignItems={'flex-end'} gap={2} >
                      <Heading fontSize={'6xl'} color='#ffaa00' textShadow={'2px 2px 8px #ffffffbd'} mb='-12px' fontFamily='test'>
                        {item.time}
                      </Heading>
                      <Heading fontSize={'xl'} maxW='146px' color='#502314' fontFamily='test' fontWeight={'normal'}>
                        {item.title}
                      </Heading>
                    </Box>
                    <Text mb='40px' color='#182338' fontSize={'1.325rem'} maxW={'520px'} textAlign='center' mt='60px'>
                      {item.description}
                    </Text>

                  </Zoom>
                </Box>
              )
            })
          }
        </Box>
      </Box>

      <Image src='/images/mosaico.svg' alt='logo'
        position={'relative'}
        bottom='-2px'
        w={'100%'}
        h={'52px'}
        display={'block'}
        objectFit={'cover'}
      />
    </Flex>
  )
}
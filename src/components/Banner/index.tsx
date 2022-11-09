import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './Banner.module.scss';

import Carousel from 'better-react-carousel'

export function Banner({ data }) {

  return (

    <Box className={styles.carousel}>
      <Carousel cols={1} rows={1} gap={10} loop={true} hideArrow={false}  >
        <Carousel.Item>

          <Flex

            className={`${styles.bannerContent} ${styles.bannerConfigs}`}
            bgImage={"url('/images/primary-banner.png')"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w='100%'
            h={"660px"}
          >
            <Box className={styles.bannerPrimaryContent} >
              <Flex flexDir='column' align='center'>
                <Text fontSize={'146px'} height='180px'>
                  TE VER
                </Text>
                <Text fontSize={'40px'} letterSpacing='.26em' fontFamily='Bebas Neue'>
                  E NÃO TE QUERER
                </Text>
              </Flex>

              <Flex
                color='#fcde4a'
                textShadow={' 6px 6px 3px rgba(0, 0, 0, 0.65);'}
                flexDir='column'
                align='flex-start'
                fontSize={'86px'}
                fontFamily={'test-two'}
                pt='60px'
                pl='6rem'
              >
                <Text height={'100px'}>
                  É IMPROVÁVEL
                </Text>

                <Text>
                  É IMPOSSÍVEL.
                </Text>
              </Flex>
            </Box>

          </Flex>

        </Carousel.Item>

        <Carousel.Item>
          <Flex

            className={`${styles.bannerContent} ${styles.bannerConfigs}`}
            bgImage={"url('/images/secondary-banner.png')"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w='100%'
            h={"660px"}

            display='flex'
            align={'end'}
            color='#ff6634'
            fontFamily={'test-two'}

          >

            <Box pt='90px' pr='4.6rem' textShadow={' -9px 6px 4px rgb(0 0 0 / 78%);'}>
              <Text fontSize='8rem' letterSpacing={'2px'}
              >
                PROMOÇÃO
              </Text>

              <Box pr='12px' fontWeight={'bold'} fontSize='8rem' fontFamily={'test'} textAlign='end' color='#FCDE4A'>
                <Text fontSize='3.2rem'>
                  Smash Salada
                </Text>
                <Text fontSize='3.2rem' lineHeight='1'>
                  Adicional de <br /> Bacon
                </Text>
              </Box>

            </Box>



          </Flex>
        </Carousel.Item>

        <Carousel.Item>
          <Flex

            bgImage={"url('/images/third-banner.png')"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w='100%'
            h={"660px"}
            className={` ${styles.bannerConfigs}`}

            display='flex'
            flexDir={'column'}
            align={'center'}
            justify='flex-start'
            color='#ccc'
          >



            <Text fontSize='10rem' fontFamily={'test-two'} letterSpacing='10px' position='relative' top={'-26px'} color='#ff8601'>
              HUMMMMMMM
            </Text>
            <Text fontSize='2rem' fontFamily={'test'} letterSpacing='2px' position='relative' top={'-86px'} color='#feeddd'>
              {"Deu vontade de Jeff's"}?
            </Text>
          </Flex>
        </Carousel.Item>

        {/* ... */}
      </Carousel >
    </Box >



  )
}
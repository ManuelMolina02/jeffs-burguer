import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './Banner.module.scss';

import Carousel from 'better-react-carousel'

export function Banner({ data }) {

  return (

    <Box className={styles.carousel}>
      <Carousel cols={1} rows={1} gap={10} loop={true} hideArrow={false} >
        <Carousel.Item>
          <main>
            <Flex
              width='550px'
              className={styles.bannerContent}
              bgImage={"url('/images/primary-banner.png')"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              w='100%'
              h={"660px"}
            >
              <Box px={'80px'}>
                <Flex flexDir='column' align='center' maxW={'50%'}>
                  <Heading fontSize={'126px'} height='140px'>
                    TE VER
                  </Heading>
                  <Text fontSize={'40px'} letterSpacing='.26em'>
                    E NÃO TE QUERER
                  </Text>
                </Flex>

                <Flex color='#fcde4a' textShadow={' 3px 9px 9px rgba(0, 0, 0, 0.72)'} flexDir='column' align='flex-start' fontSize='76px' fontWeight={'bold'} >
                  <Text height='140px' fontSize={'126px'}>
                    É IMPROVÁVEL
                  </Text>

                  <Text fontSize={'126px'}>
                    É IMPOSSÍVEL.
                  </Text>
                </Flex>
              </Box>

            </Flex>
          </main>
        </Carousel.Item>

        <Carousel.Item>
          <Flex
            width='550px'
            className={styles.bannerContent}
            bgImage={"url('/images/secondary-banner.png')"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w='100%'
            h={"660px"}

            display='flex'
            align={'end'}
            pt='90px'
            pr='3.6rem'
            color='#F4887A'

          >

            <Text fontWeight={'bold'} fontSize='8rem' fontFamily={'test'}>
              PROMOÇÃO
            </Text>

            <Box fontWeight={'bold'} fontSize='8rem' fontFamily={'Cabin Sketch'} textAlign='end' color='#FCDE4A'>
              <Text fontSize='4rem' fontFamily={'Cabin Sketch'}>
                Smash Salada
              </Text>
              <Text fontSize='4rem' fontFamily={'Cabin Sketch'} lineHeight='1'>
                Adicional de <br /> Bacon
              </Text>
            </Box>



          </Flex>
        </Carousel.Item>

        <Carousel.Item>
          <Flex
            width='550px'
            bgImage={"url('/images/third-banner.png')"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w='100%'
            h={"660px"}

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
              Deu vontade de Jeff's?
            </Text>
          </Flex>
        </Carousel.Item>

        {/* ... */}
      </Carousel>
    </Box>



  )
}
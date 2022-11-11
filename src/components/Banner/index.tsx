import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './Banner.module.scss';

import Carousel from 'better-react-carousel'

export function Banner({ data }) {

  return (

    <Box className={styles.carousel}>
      <Carousel cols={1} rows={1} gap={10} loop={true} hideArrow={false} autoplay={3500} >
        <Carousel.Item>
          <Flex
            className={`${styles.bannerContent} ${styles.bannerPrimaryContent}`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={"url('/images/primary-banner.png')"}
          >
            <Flex className={styles.bannerTopContent}>
              <Text>
                TE VER
              </Text>
              <Text>
                E NÃO TE QUERER
              </Text>
            </Flex>

            <Flex className={styles.bannerBottomContent}>
              <Text>
                É IMPROVÁVEL
              </Text>

              <Text>
                É IMPOSSÍVEL.
              </Text>
            </Flex>
          </Flex>

        </Carousel.Item>

        <Carousel.Item>

          <Flex
            className={`${styles.bannerContent}  ${styles.secondBanner}`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={"url('/images/secondary-banner.png')"}

            display='flex'
            align={'end'}
            color='#ff6634'
            fontFamily={'test-two'}
            pt='90px'
            pr='4.6rem'
          >


            <Text fontSize='8rem' letterSpacing={'2px'} >
              PROMOÇÃO
            </Text>

            <Box className={styles.secondBannerBottomContent} pr='12px' fontWeight={'bold'} fontSize='8rem' fontFamily={'test'} textAlign='end' color='#FCDE4A'>
              <Text>
                Smash Salada
              </Text>
              <Text fontSize='3.2rem' lineHeight='1'>
                Adicional de Bacon
              </Text>
            </Box>




          </Flex>
        </Carousel.Item>

        <Carousel.Item>

          <Flex
            className={`${styles.bannerContent} ${styles.thirdBanner}`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={"url('/images/third-banner.png')"}

            display='flex'
            flexDir={'column'}
            align={'center'}
            justify='flex-start'
          >
            <Text>
              HUMMMMMMM
            </Text>
            <Text>
              {"Deu vontade de Jeff's"}?
            </Text>
          </Flex>
        </Carousel.Item>

        {/* ... */}
      </Carousel >
    </Box >



  )
}
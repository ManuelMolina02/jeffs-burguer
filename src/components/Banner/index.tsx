import { Box, Flex, Text } from "@chakra-ui/react";
import styles from './Banner.module.scss';
import Carousel from 'better-react-carousel'

export function Banner() {
  return (
    <Box className={styles.carousel}>
      <Carousel cols={1} rows={1} gap={10} loop={true} hideArrow={false}  >
        <Carousel.Item>
          <Flex
            className={`${styles.bannerContent} ${styles.bannerPrimaryContent}`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={"url('/images/primary-banner.webp')"}
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
            bgImage={"url('/images/secondary-banner.webp')"}

            display='flex'
            align={'end'}
            fontFamily={'test-two'}
            pt='90px'
            pr='4.6rem'
          >
            <Text fontSize='8rem' letterSpacing={'2px'} color={'#ee5a2a'} textShadow='-12px 6px 13px rgb(0 0 0 / 90%) !important'>
              PROMOÇÃO
            </Text>

            <Box className={styles.secondBannerBottomContent} pr='12px' fontWeight={'bold'} fontSize='8rem' fontFamily={'test'} textAlign='end' color='#ffd889'>
              <Text textShadow={'-10px 6px 10px rgb(0 0 0) !important;'}>
                Smash Salada
              </Text>

              <Flex gap='40px'>
                <Text fontSize='10rem' lineHeight='1' color={'#ffaa00'} textShadow={'7px -5px 11px rgb(0 0 0 / 100%) !important'}>
                  R$ 20,00
                </Text>
                <Text fontSize='3.2rem' lineHeight='1'>
                  Adicional de Bacon
                </Text>
              </Flex>

            </Box>

          </Flex>
        </Carousel.Item>

        <Carousel.Item>
          <Flex
            className={`${styles.bannerContent} ${styles.thirdBanner}`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={"url('/images/third-banner.webp')"}

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
      </Carousel>
    </Box>
  )
}
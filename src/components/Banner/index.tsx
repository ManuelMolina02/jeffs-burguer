import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './Banner.module.scss';


export function Banner({ data }) {
  return (
    <Flex
      align={"center"}
      justify={"flex-start"}
      bgImage={"url('/images/banner.webp')"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"660px"}
    >

      <Flex width='550px' className={styles.bannerContent} >
        <Flex flexDir='column' align='center'>
          <Heading fontSize={'126px'} height='140px' fontFamily='Bebas Neue'>
            TE VER
          </Heading>
          <Text fontSize={'40px'} letterSpacing='.26em' fontFamily='Bebas Neue'>
            E NÃO TE QUERER
          </Text>
        </Flex>

        <Flex color='#fcde4a' textShadow={' 3px 9px 9px rgba(0, 0, 0, 0.72)'} flexDir='column' align='flex-start' fontSize='76px' fontWeight={'bold'} >
          <Text height='140px' fontSize={'126px'} fontFamily='Bebas Neue'>
            É IMPROVÁVEL
          </Text>

          <Text fontSize={'126px'} fontFamily='Bebas Neue'>
            É IMPOSSÍVEL.
          </Text>
        </Flex>

      </Flex >

    </Flex >
  )
}
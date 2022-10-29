import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import styles from './Banner.module.css';

export function Banner() {
  return (
    <Flex
      align={"center"}
      justify={"flex-start"}
      bgImage={"url('/images/banner.png')"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"660px"}
    >

      <Box className={styles.bannerContent}>
        <Heading>
          Teste de Título
        </Heading>

        <Text>
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
          asdasdasd adsas dasda sdasd asdasd asdas dasdas asdasd asdasdas asd asd
        </Text>
      </Box>


    </Flex >
  )
}
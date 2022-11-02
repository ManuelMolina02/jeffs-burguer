import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './Banner.module.css';


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

      <Box className={styles.bannerContent}>
        <Heading fontSize={'46px'}>
          Teste de Título
        </Heading>

        <Text fontSize={'xl'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </Text>
      </Box >

    </Flex >
  )
}
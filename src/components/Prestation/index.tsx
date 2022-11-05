import { useState } from 'react'
import { Box, Image } from "@chakra-ui/react";

export function Prestation() {
  const [styles, setStyles] = useState({
    zIndex: '10000',
    bg: '#4B1924',
    transform: 'scale(1)'
  })

  return (
    <Box position={'fixed'} zIndex={styles.zIndex} w='100vw' h='100%' bg={styles.bg} display={'flex'} alignItems='center' justifyContent={'center'} >
      <Image src='/logo-abertura.png' alt='' />
    </Box>
  )
}
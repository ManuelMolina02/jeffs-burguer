import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from './About.module.scss';

export function About() {

  const historyData = [
    {
      id: 1,
      time: '+20',
      title: 'receitas no cardápio',
      description: 'O chef Jeff, é conhecido por ser muito criativo e possuir um cardápio bastante variado. Cada lanche com as melhores caracteristicas de sabores, texturas e aromas evidenciados.'
    },
    {
      id: 2,
      time: '10',
      title: 'anos no mercado',
      description: 'Em 2012 iniciou sua carreira na cozinha do Madero, e desde então vem se destacando no mercado de lanches gourmet. Com o passar dos anos, o chef Jeff foi se especializando em cada vez mais receitas, e hoje é uma referencia na área.'
    },
    {
      id: 3,
      time: '7',
      title: 'especializações culinárias',
      description: 'Assador e Hamburgueiro Profissonal, Especializado na confecção de cremes de queijos, especialista em carnes nobres, e muito mais. O chef Jeff é um verdadeiro mestre na arte de preparar lanches gourmet.'
    },
    {
      id: 4,
      time: '+6',
      title: 'hamburguers especiais',
      description: 'Com a maionese "The best" de alho com limão ciciliano, seus hambúrguers tem uma variação divertida de texturas utilizando doritos, batata pringles, medalhão de queijo, requeijão com alho frito, entre outras delicias.'
    },
    /*
    {
      id: 5,
      time: '+4',
      title: 'molhos artesanais',
      description: 'Conheça mais sobre a trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias Conheça mais sobre a trajetória de Jefferson Oliveira'
    },*/
  ]

  return (

    <Flex
      id='about'
      flexDir={'column'}
      align='center'
      bg='#F5E4E4'
      className={styles.about}
    >
      <Text mb='40px' fontSize={'1.6rem'} maxW={'680px'} textAlign='center' mt='60px'>
        Conheça mais sobre o trabalho e trajetória de Jefferson Oliveira, o chef por trás dessas maravilhas culinárias
      </Text>



      <Box className={styles.aboutContent}>
        <Box display={'flex'} justifyContent='flex-end' mr='60px'>

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
        </Box>


        <Box>

          {
            historyData.map((item) => {
              return (
                <Box key={item.id} className={styles.historyItem}>



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


                </Box>
              )
            })
          }
        </Box>
      </Box>

      <Image src='/images/mosaico.svg' alt='logo'
        w={'100%'}
        h={'52px'}
        objectFit={'cover'}
      />
    </Flex>
  )
}
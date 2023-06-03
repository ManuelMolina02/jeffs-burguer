import { Box, Flex, Grid, Select, Text } from "@chakra-ui/react";
import { CardItem } from "../Card";
import styles from './Menu.module.scss';
import { useState } from "react";

export function Menu({ cards }) {

  const foodsFiltered = cards.filter(item => item.title !== 'Promoção')
  const [selected, setSelected] = useState([...foodsFiltered])

  function filterFood(e) {

    if (e.target.value) {
      const filtered = foodsFiltered.filter(item => item.type === e.target.value)
      setSelected(filtered)
    } else {
      setSelected([...foodsFiltered])
    }


  }



  return (
    <Flex id='menu' bg='#F5E4E4' flexDirection={'column'}>
      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
        m='60px auto'
        gap={12}
        className={styles.menuContent}
      >
        <Text className={styles.descriptionMenu} mb='40px'>
          Veja as opções do nosso cardápio completo com deliciosos lanches e hamburgueres artesanais.  <br />Você vai se surpreender!
        </Text>


        <Select variant='flushed' placeholder='Visualizar todas as opções' onChange={(value) => filterFood(value)}>
          <option value="Hambúrguer">Hambúrguer</option>
          <option value="Smash">Smash</option>
          <option value="Hot Dog">Hot Dog</option>
        </Select>

        <Grid className={styles.gridMenu} gap={16} >
          {
            selected.map(item => (
              <CardItem key={item.id} cardData={item} />
            ))
          }
        </Grid>

        <Box className={styles.descriptionMenu} mt='40px'>
          <Text>
            Aproveite o momento e viva essa experiência culinária.
            <br />
            Faça seu pedido agora!
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
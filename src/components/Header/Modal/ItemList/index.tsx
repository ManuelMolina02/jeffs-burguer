import { useState } from 'react'
import { Box, Button, Flex, ListItem, Text } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineMinusCircle } from 'react-icons/ai'

export function ItemList({ item, updateProduct }) {
  const [countItem, setCountItem] = useState(0)

  function addItem(id: number) {
    if (countItem < 10) {
      setCountItem(countItem + 1)
      updateProduct(id, countItem + 1)
    }
  }

  function rmItem(id: number) {
    if (countItem > 0) {
      setCountItem(countItem - 1)
      updateProduct(id, countItem - 1)
    }
  }

  return (
    <>
      <ListItem display={'flex'} pt='10px' mb='10px' alignItems='center' justifyContent={'space-between'} gap='16px' borderBottom={`solid 1px ${countItem > 0 ? "#dd6b20" : "#e4e4e4"}`}>
        <Box>
          <Text fontSize={22} color={countItem > 0 ? 'orange.500' : ''}>
            {item.title} | {item.price}
          </Text>
          <Text fontSize={16} color='gray.400'>
            {item.ingredients}
          </Text>
        </Box>

        <Flex gap={2} align='center' py='8px'>

          <Text fontSize={22} mr='26px'>
            {item.qtd ? item.qtd : countItem}
          </Text>

          <Button w='32px' p='0' onClick={() => addItem(item.id)}>
            <IoIosAddCircleOutline size='28px' />
          </Button>
          <Button w='32px' p='0' onClick={() => rmItem(item.id)}>
            <AiOutlineMinusCircle size='28px' />
          </Button>
        </Flex>
      </ListItem>
    </>
  )
}
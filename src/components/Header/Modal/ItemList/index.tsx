import { useState } from 'react'
import { Button, Flex, ListItem, Text } from "@chakra-ui/react";
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
      <ListItem display={'flex'} alignItems='center' justifyContent={'space-between'} gap='16px' borderBottom={'solid 1px #e4e4e4'}>
        <Text fontSize={18}>
          {item.title} | {item.price}
        </Text>

        <Flex gap={2} align='center' py='8px'>

          <Text fontSize={22} mr='26px'>
            {countItem}
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
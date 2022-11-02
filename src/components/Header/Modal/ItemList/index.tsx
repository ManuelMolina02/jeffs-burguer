import { useState } from 'react'
import { Button, Flex, ListItem, Text } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineMinusCircle } from 'react-icons/ai'

export function ItemList({ item, requests, dataItems }) {
  const [countItem, setCountItem] = useState(0)

  function addItem({ id }) {
    if (countItem < 10) {
      setCountItem(countItem + 1)

      requests.setHandleItem({
        id: item.id,
        qtd: countItem
      })
    }
  }

  function rmItem({ id }) {
    if (countItem > 0) {
      setCountItem(countItem - 1)
    }
  }


  /*
      const productsInCart = dataItems.filter(data => data.title !== item.title && data.qtd > 0)

      const newItem = {
        id: item.id,
        title: item.title,
        price: Number(item.price.replace('R$', '').replace(',', '.')),
        qtd: countItem
      }

      requests.setDataItems([...productsInCart, newItem])

  */


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
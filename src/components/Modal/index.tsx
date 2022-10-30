import { Box, Button, Image, ListItem, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react";
import styles from './Modal.module.css';

export function Modal({ handleModal, closeModal, data }) {

  return (
    <ModalChakra onClose={closeModal} isOpen={handleModal} motionPreset='slideInBottom' size={'xl'} isCentered  >
      <ModalOverlay />
      <ModalContent className={styles.modal}  >

        <ModalBody pt='0' px='0'>

        </ModalBody>

        <ModalFooter>
          <Button onClick={() => closeModal(false)}>fechar</Button>
        </ModalFooter>

      </ModalContent>
    </ModalChakra>
  )
}
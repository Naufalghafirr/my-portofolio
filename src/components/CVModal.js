import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalCloseButton, 
  Button, 
  Icon, 
  HStack,
  Text,
  Box
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaDownload, FaEye } from 'react-icons/fa'

export default function CVModal({ size = "lg", variant = "outline" }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = `/cv/cv_naufal.pdf`
    link.download = 'CV_Naufal_Ghafir_Ramadhan.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Button 
        variant={variant}
        size={size}
        onClick={handleOpenModal}
        leftIcon={<Icon as={FaEye} />}
      >
        Curriculum Vitae
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="6xl">
        <ModalOverlay />
        <ModalContent maxW="90vw" maxH="90vh">
          <ModalHeader>
            <HStack justify="space-between" w="full">
              <Text>CV - Naufal Ghafir Ramadhan</Text>
              <Button 
                size="sm" 
                colorScheme="blue"
                onClick={handleDownloadCV}
                leftIcon={<Icon as={FaDownload} />}
              >
                Download
              </Button>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <Box 
              w="100%" 
              h="70vh" 
              bg="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <iframe
                src={`/cv/cv_naufal.pdf`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="CV Naufal Ghafir Ramadhan"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

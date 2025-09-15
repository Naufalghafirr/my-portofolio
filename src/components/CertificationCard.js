import { 
  Card,
  Box,
  CardBody, 
  VStack, 
  Heading, 
  Text, 
  HStack, 
  Badge, 
  Icon,
  Flex,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { FaCertificate, FaCalendarAlt, FaEye } from 'react-icons/fa'

export default function CertificationCard({ 
  certification, 
  cardBg, 
  textColor 
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card bg={cardBg} boxShadow="lg" minHeight="250px" display="flex" flexDirection="column">
        <CardBody display="flex" flexDirection="column" height="100%">
          <VStack spacing={4} align="start" flex="1">
            <Flex align="center" gap={2}>
              <Icon as={FaCertificate} color="orange.500" />
              <Heading size="md">{certification.title}</Heading>
            </Flex>
            
            {certification.description && (
              <Text color={textColor} fontSize="sm">
                {certification.description}
              </Text>
            )}
            
            <HStack spacing={2} wrap="wrap">
              {certification.issuer && (
                <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                  {certification.issuer}
                </Badge>
              )}
              {certification.type && (
                <Badge colorScheme="blue" variant="subtle" fontSize="xs">
                  {certification.type}
                </Badge>
              )}
            </HStack>
            
            {certification.date && (
              <HStack>
                <Icon as={FaCalendarAlt} color="gray.500" />
                <Text color={textColor} fontSize="sm">{certification.date}</Text>
              </HStack>
            )}
          </VStack>
          
          <Flex justify="flex-end" mt="auto">
            {certification.image && (
              <Button 
                size="sm" 
                colorScheme="blue" 
                variant="outline"
                onClick={onOpen}
                leftIcon={<Icon as={FaEye} />}
              >
                Lihat Sertifikat
              </Button>
            )}
          </Flex>
        </CardBody>
      </Card>

      {/* Modal untuk menampilkan gambar sertifikat */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent maxW="90vw" maxH="90vh">
          <ModalHeader>
            <HStack justify="space-between" w="full">
              <Text>{certification.title}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={4} overflow="auto">
            <Box display="flex" justifyContent="center" alignItems="center">
              {certification.image && certification.image.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={certification.image}
                  width="100%"
                  height="600px"
                  style={{ border: 'none', borderRadius: '8px' }}
                  title={certification.title}
                />
              ) : (
                <Image
                  src={certification.image}
                  alt={certification.title}
                  width="100%"
                  height="auto"
                  objectFit="contain"
                  borderRadius="md"
                />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

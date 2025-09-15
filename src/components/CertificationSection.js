import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  VStack,
  useColorModeValue 
} from '@chakra-ui/react'
import CertificationCard from './CertificationCard'

export default function CertificationSection({ 
  cardBg, 
  textColor, 
  certifications 
}) {
  return (
    <Box id="certifications" py={20} bg={cardBg}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">Sertifikasi</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index}
                certification={cert}
                cardBg={cardBg}
                textColor={textColor}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  VStack,
  useColorModeValue 
} from '@chakra-ui/react'
import EducationCard from './EducationCard'

export default function EducationSection({ 
  cardBg, 
  textColor, 
  education 
}) {
  return (
    <Box id="education" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">Pendidikan</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {education.map((edu, index) => (
              <EducationCard 
                key={index}
                education={edu}
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

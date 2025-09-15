import { Box, Container, VStack, Heading, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsSection({ 
  cardBg, 
  textColor,
  projects = []
}) {
  return (
    <Box id="projects" py={20} bg={cardBg}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">Proyek Yang Saya Kerjakan</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
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

import { Card, CardBody, Image, VStack, Heading, Text, HStack, Badge, Button, Icon, Flex } from '@chakra-ui/react'
import { FaGithub, FaUser } from 'react-icons/fa'
import { useState } from 'react'

export default function ProjectCard({ 
  project, 
  cardBg, 
  textColor 
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <Card bg={cardBg} boxShadow="lg" minHeight="400px" display="flex" flexDirection="column">
      <Image 
        src={project.image || '/image/default.png'} 
        alt={project.title}
        height="200px"
        width="100%"
        objectFit="contain"
        borderRadius="md"
      />
      <CardBody display="flex" flexDirection="column" height="100%">
        <VStack spacing={4} align="start" flex="1">
          <Heading size="md">{project.title}</Heading>
          {project.description && (
            <VStack align="start" spacing={1} width="100%">
              <Text 
                color={textColor}
                noOfLines={isExpanded ? undefined : 2} // Batasi teks menjadi 2 baris jika tidak diperluas
              >
                {project.description}
              </Text>
              {project.description.length > 80 && (
                <Button
                  mt={2}
                  size="xs"
                  variant="link"
                  color="blue.500"
                  onClick={() => setIsExpanded(!isExpanded)}
                  alignSelf="flex-start"
                  p={0}
                  height="auto"
                  fontSize="sm"
                >
                  {isExpanded ? 'Tutup' : 'Selengkapnya'}
                </Button>
              )}
            </VStack>
          )}
          <HStack spacing={2}>
            {project.tech.map((tech) => (
              <Badge key={tech} colorScheme="blue" variant="subtle">
                {tech}
              </Badge>
            ))}
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaUser} color="blue.500" />
            <Text color={textColor}>{project.jobTitle}</Text>
          </HStack>
        </VStack>
        <Flex justify="flex-end" gap={4} mt="auto">
          {project.link && (
          <Button 
            size="sm" 
            colorScheme="blue" 
            onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
            isDisabled={!project.link} 
          >
            Live Demo
          </Button>
          )}
          {project.code && (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={project.code ? () => window.open(project.code, '_blank') : undefined}
              isDisabled={!project.code}
            >
              <Icon as={FaGithub} mr={2} />
              Code
            </Button>  
          )}
        </Flex>
      </CardBody>
    </Card>
  )
}

import { Card, CardBody, Image, VStack, Heading, Text, HStack, Badge, Button, Icon, Flex, useBreakpointValue } from '@chakra-ui/react'
import { FaGithub, FaUser } from 'react-icons/fa'
import { useState } from 'react'

export default function ProjectCard({ 
  project, 
  cardBg, 
  textColor 
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Responsive values
  const cardMinHeight = useBreakpointValue({ base: 'auto', sm: '350px', md: '400px' })
  const imageHeight = useBreakpointValue({ base: '120px', sm: '150px', md: '200px' })
  const headingSize = useBreakpointValue({ base: 'sm', md: 'md' })
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm' })
  const spacing = useBreakpointValue({ base: 2, sm: 3, md: 4 })
  const badgeFontSize = useBreakpointValue({ base: '2xs', sm: 'xs', md: 'sm' })
  const textFontSize = useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md' })
  const cardPadding = useBreakpointValue({ base: 2, sm: 3, md: 5 })
  const iconSize = useBreakpointValue({ base: 3, sm: 4, md: 5 })
  
  return (
    <Card 
      bg={cardBg} 
      boxShadow="lg" 
      minHeight={cardMinHeight} 
      display="flex" 
      flexDirection="column" 
      width="100%"
      borderRadius={{ base: 'sm', md: 'md' }}
      margin={{ base: 1, sm: 0 }}
    >
      <Image 
        src={project.image || '/image/default.png'} 
        alt={project.title}
        height={imageHeight}
        width="100%"
        objectFit="contain"
        borderRadius={{ base: 'sm', md: 'md' }}
        fallbackSrc='/image/default.png'
      />
      <CardBody display="flex" flexDirection="column" height="100%" p={cardPadding}>
        <VStack spacing={spacing} align="start" flex="1">
          <Heading size={headingSize}>{project.title}</Heading>
          {project.description && (
            <VStack align="start" spacing={1} width="100%">
              <Text 
                color={textColor}
                noOfLines={isExpanded ? undefined : 2}
                fontSize={textFontSize}
                lineHeight={{ base: 'short', md: 'normal' }}
              >
                {project.description}
              </Text>
              {project.description.length > 80 && (
                <Button
                  mt={{ base: 1, md: 2 }}
                  size="xs"
                  variant="link"
                  color="blue.500"
                  onClick={() => setIsExpanded(!isExpanded)}
                  alignSelf="flex-start"
                  p={0}
                  height="auto"
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  {isExpanded ? 'Close' : 'More'}
                </Button>
              )}
            </VStack>
          )}
          <HStack spacing={1} flexWrap="wrap">
            {project.tech.map((tech) => (
              <Badge key={tech} colorScheme="blue" variant="subtle" fontSize={badgeFontSize}>
                {tech}
              </Badge>
            ))}
          </HStack>
          <HStack spacing={{ base: 1, sm: 2 }}>
            <Icon as={FaUser} color="blue.500" boxSize={iconSize} />
            <Text color={textColor} fontSize={textFontSize} noOfLines={1}>{project.jobTitle}</Text>
          </HStack>
        </VStack>
        <Flex 
          justify="flex-end" 
          gap={{ base: 1, sm: 2 }} 
          mt="10px"
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'stretch', sm: 'center' }}
          pt={{ base: 2, sm: 0 }}
        >
          {project.link && (
          <Button 
            size={buttonSize} 
            colorScheme="blue" 
            onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
            isDisabled={!project.link}
            width={{ base: 'full', sm: 'auto' }}
            minW={{ base: 'full', sm: '100px' }}
            h={{ base: '32px', sm: 'auto' }}
            p={2}
          >
            Live Demo
          </Button>
          )}
          {project.code && (
            <Button 
              size={buttonSize} 
              variant="outline" 
              onClick={project.code ? () => window.open(project.code, '_blank') : undefined}
              isDisabled={!project.code}
              width={{ base: 'full', sm: 'auto' }}
              minW={{ base: 'full', sm: '100px' }}
              h={{ base: '32px', sm: 'auto' }}
              p={2}
            >
              <Icon as={FaGithub} mr={{ base: 1, sm: 2 }} boxSize={{ base: 3, sm: 4 }} />
              Code
            </Button>  
          )}
        </Flex>
      </CardBody>
    </Card>
  )
}

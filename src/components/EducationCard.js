import { 
  Card, 
  CardBody, 
  VStack, 
  Heading, 
  Text, 
  HStack, 
  Badge, 
  Icon,
  Flex
} from '@chakra-ui/react'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

export default function EducationCard({ 
  education, 
  cardBg, 
  textColor 
}) {
  return (
    <Card bg={cardBg} boxShadow="lg" minHeight="200px" display="flex" flexDirection="column">
      <CardBody display="flex" flexDirection="column" height="100%">
        <VStack spacing={4} align="start" flex="1">
          <Flex align="center" gap={2}>
            <Icon as={FaGraduationCap} color="blue.500" />
            <Heading size="md">{education.title}</Heading>
          </Flex>
          
          {education.description && (
            <Text color={textColor} fontSize="sm">
              {education.description}
            </Text>
          )}
          
          <HStack spacing={2} wrap="wrap">
            {education.tech.map((tech) => (
              <Badge key={tech} colorScheme="green" variant="subtle" fontSize="xs">
                {tech}
              </Badge>
            ))}
          </HStack>
          
          {education.year && (
            <HStack>
              <Icon as={FaCalendarAlt} color="gray.500" />
              <Text color={textColor} fontSize="sm">{education.year}</Text>
            </HStack>
          )}
        </VStack>
      </CardBody>
    </Card>
  )
}

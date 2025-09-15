import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'
export default function CardSkills({ cardBg, textColor , title, description }) {
  return (
        <Card bg={cardBg}>
        <CardHeader>
            <HStack>
            <Icon as={FaCode} color="blue.500" boxSize={6} />
            <Heading size="md">{title}</Heading>
            </HStack>
        </CardHeader>
        <CardBody>
            <Text color={textColor}>
            {description}
            </Text>
        </CardBody>
        </Card>
  )
}
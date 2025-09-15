import { Box, Container, Flex, Heading, Spacer, HStack, Link, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Navigation({ listAnchor = [], icon = null }) {
  const cardBg = useColorModeValue("white", "gray.800")
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = listAnchor.map(item => item.anchor.substring(1)) // Remove # from anchor
      const scrollPosition = window.scrollY + 100 // Offset untuk header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    // Set initial active section
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [listAnchor])

  return (
    <Box bg={cardBg} boxShadow="sm" position="sticky" top={0} zIndex={10}>
        <Container maxW="container.xl" py={4}>
          <Flex align="center">
            <Heading size="lg" color="blue.500"><Link href="#home" _hover={{ textDecoration: "none", color: "blue.400" }}>Portofolio Naufal</Link></Heading>
            <Spacer />
            <HStack spacing={8}>
              {listAnchor.map((item, index) => {
                const sectionId = item.anchor.substring(1) // Remove # from anchor
                const isActive = activeSection === sectionId
                
                return (
                  <Link 
                    key={index} 
                    href={item.anchor} 
                    _hover={{ textDecoration: "none", color: "blue.400" }} 
                    color={isActive ? "blue.500" : undefined}
                    fontWeight={isActive ? "bold" : "normal"}
                    textDecoration={isActive ? "underline" : "none"}
                    textDecorationColor="blue.500"
                    textDecorationThickness="2px"
                    textUnderlineOffset="4px"
                    transition="all 0.3s ease"
                  >
                    {item.title}
                  </Link>
                )
              })}
            </HStack>
          </Flex>
        </Container>
      </Box>
    )
  }
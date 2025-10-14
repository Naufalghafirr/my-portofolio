import { Box, Container, Flex, Heading, Spacer, HStack, Link, useColorModeValue, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navigation({ listAnchor = [], icon = null }) {
  const cardBg = useColorModeValue("white", "gray.800")
  const [activeSection, setActiveSection] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

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
            <Heading size="lg" color="blue.500"><Link href="#home" _hover={{ textDecoration: "none", color: "blue.400" }}>My Portofolio</Link></Heading>
            <Spacer />
            {/* Navigasi Desktop */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
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

            {/* Tombol Navigasi Mobile (Hamburger Menu) */}
            <IconButton
              ref={btnRef}
              icon={<HamburgerIcon />}
              aria-label="Buka Menu"
              onClick={onOpen}
              display={{ base: 'flex', md: 'none' }}
              variant="ghost"
              color="blue.500"
              size="lg"
            />
          </Flex>
        </Container>

        {/* Drawer Navigasi Mobile */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={cardBg}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Navigasi</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                {listAnchor.map((item, index) => {
                  const sectionId = item.anchor.substring(1)
                  const isActive = activeSection === sectionId
                  return (
                    <Link
                      key={index}
                      href={item.anchor}
                      onClick={onClose} // Tutup drawer saat link diklik
                      _hover={{ textDecoration: "none", color: "blue.400" }}
                      color={isActive ? "blue.500" : undefined}
                      fontWeight={isActive ? "bold" : "normal"}
                      textDecoration={isActive ? "underline" : "none"}
                      textDecorationColor="blue.500"
                      textDecorationThickness="2px"
                      textUnderlineOffset="4px"
                      transition="all 0.3s ease"
                      fontSize="xl" // Ukuran font lebih besar untuk UX mobile
                      py={2}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  Badge,
  Icon,
  Link,
  Image,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFire,
  FaReact,
  FaJs,
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaHome,
  FaBootstrap,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa'
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { 
  SiMysql,
  SiCodeigniter
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

import Navigation from '@/components/Navigation'
import Typewriter from '@/components/Typewriter'
import CardSkills from '@/components/CardSkills'
import ProjectsSection from '@/components/ProjectsSection'
import CVModal from '@/components/CVModal'
import EducationSection from '@/components/EducationSection'
import CertificationSection from '@/components/CertificationSection'
import Contact from '@/components/Contact'

export default function Home() {
  const bg = useColorModeValue("gray.50", "gray.900")
  const cardBg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const image = useColorModeValue("https://via.placeholder.com/1920x1080/3182ce/ffffff?text=Background", "https://via.placeholder.com/1920x1080/3182ce/ffffff?text=Background")
  const toast = useToast()

  const listAnchor = [
    {anchor: "#home", title: "Home"}, 
    {anchor: "#about", title: "About"}, 
    {anchor: "#skills", title: "Skills"}, 
    {anchor: "#projects", title: "Projects"},
    {anchor: "#education", title: "Education"},
    {anchor: "#certifications", title: "Certifications"},
    {anchor: "#contact", title: "Contact"}
  ]

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'orange.400' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'blue.300' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'purple.300' },
    { name: 'JavaScript', icon: FaJs, color: 'yellow.400' },
    { name: 'PHP', icon: FaPhp, color: 'blue.500' },
    { name: 'Laravel', icon: FaLaravel, color: 'red.500' },
    { name: 'CodeIgniter 4', icon: SiCodeigniter, color: 'orange.400' },
    { name: 'WordPress', icon: FaWordpress, color: 'blue.400' },
    { name: 'React', icon: FaReact, color: 'blue.400' },
    { name: 'Next js', icon: RiNextjsFill, color: 'black.400' },
    { name: 'MySQL', icon: SiMysql, color: 'blue.400' },
    { name: 'MongoDB', icon: DiMongodb, color: 'green.400' },
    { name: 'PostgreSQL', icon: BiLogoPostgresql, color: 'blue.400' },
    { name: 'Rest API', icon: FaFire, color: 'orange.400' },
    { name: 'GitHub', icon: FaGithub, color: 'black.400' },
    { name: 'UI/UX Design', icon: FaFigma, color: 'purple.400' },
  ]

  const projects = [
    {
      title: 'E-Tiket Platform Genstix.id',
      description: 'Complete e-ticket platform development with payment system and event management.',
      tech: ['next js', 'Postgres'],
      image: '/projectImage/logo-gentix.png',
      link: 'https://genstix.id',
      jobTitle: 'Frontend Developer'
    },
    {
      title: 'Pkk Application',
      description: 'Complete PKK application development with library data recording, posyandu, and other systems.',
      tech: ['Laravel', 'MySQL'],
      image: '/projectImage/logo-pkk.png',
      code: 'https://github.com/Ardiiysh/Apk-pkk-l8/tree/codinggofir',
      jobTitle: 'Fullstack Developer'
    },
    {
      title: 'KBM Application',
      description: 'Book reading application development.',
      tech: ['Codeigniter 4', 'MongoDB'],
      image: '/projectImage/logo-kbm.png',
      link: 'https://kbm.id',
      jobTitle: 'Fullstack Developer'
    },
    {
      title: 'Sukatani Onchain Game',
      description: 'WEB 3-based farming game. Using blockchain technology to create a unique and innovative gaming experience.',
      tech: ['Next Js', 'PostgreSQL', 'Web3', 'Metamask', 'Base App', 'Tiled Map'],
      image: '/projectImage/logo-sukatani.png',
      link: 'https://sukatani.fun',
      code: 'https://github.com/deranalabs/SukataniP2E',
      jobTitle: 'Fullstack Developer'
    }
  ]

  const education = [
    {
      title: 'Universitas Pamulang',
      description: 'Information Systems student with focus on web and mobile application development.',
      tech: ['Information Systems', 'Bachelor'],
      year: '2024 - Present',
    },
    {
      title: 'SMK Wikrama 1 Garut',
      description: 'Software Engineering graduate with best honors.',
      tech: ['Software Engineering', 'Vocational School'],
      year: '2021 - 2023',
    },
    {
      title: 'SMP IT Nururrahman',
      description: 'Graduate with good average grades and active in extracurricular activities.',
      tech: ['SMP', 'Depok'],
      year: '2018 - 2021',
    }
  ]

  const certifications = [
    {
      title: 'Toeic dengan nilai 505',
      description: 'English language certification with score of 505.',
      issuer: 'TOEIC',
      type: 'English',
      date: 'August 2, 2021',
      image: '/certifications/toeic.pdf'
    },
    {
      title: 'Dasar Pemrograman Web',
      description: 'Certification to master web programming fundamentals.',
      issuer: 'Dicoding',
      type: 'Web Development',
      date: 'March 29, 2023',
      image: '/certifications/dasar_web.pdf'
    },
    {
      title: 'Certiport Certification',
      description: 'Professional certification in information and communication technology.',
      issuer: 'Certiport',
      type: 'IT Certification',
      date: 'June 12, 2023',
      image: '/certifications/certificate certiport.pdf'
    },
    {
      title: 'Belajar Dasar Pemrograman Web ke 2',
      description: 'Algorithm and data structure certification using JavaScript.',
      issuer: 'freeCodeCamp',
      type: 'Web Development',
      date: 'September 18, 2024',
      image: '/certifications/dasar_web2.pdf'
    },
    {
      title: 'IDCamp x Dicoding',
      description: 'Beyond the Basics: Elevate Your Career as a Full Stack Developer in 2024',
      issuer: 'Dicoding',
      type: 'Full Stack Development',
      date: 'September 26, 2024',
      image: '/certifications/idcamp.pdf'
    },
    
    {
      title: 'Dasar Pemrograman JavaScript',
      description: 'Basic certification to understand JavaScript programming fundamentals.',
      issuer: 'Dicoding',
      type: 'JavaScript',
      date: 'September 27, 2024',
      image: '/certifications/dasar_js.pdf'
    }
  ]

  const countEducation = education.length
  const countExperience = 1
  const countProjects = projects.length
  const countCertifications = certifications.length
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        toast({
          title: 'Your message has been sent successfully!',
          status: 'success',
          position: 'top-right',   // 👈 ini kuncinya
          duration: 3000,          // auto close setelah 3 detik
          isClosable: true,        // bisa ditutup manual
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        toast({
          title: 'Failed to send message. Please try again later.',
          status: 'error',
          position: 'top-right',
          duration: 3000,
          isClosable: true,
        });
      }

    setLoading(false);
    } catch (error) {
      toast({
        title: 'Something went wrong. Please try again.',
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg={bg} minH="100vh">
      {/* Navigation */}
      <Navigation listAnchor={listAnchor} icon={<FaHome />} />

      {/* Hero Section */}
      <Box id="home" bgImage={image} py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="center">
            {/* Left Profile Image */}
            <Box display={{ base: "none", lg: "block" }}>
              <Image
                src="/image/my-profile.jpg"
                alt="Naufal Ghafir Ramadhan"
                borderRadius="full"
                boxShadow="2xl"
                w="300px"
                h="300px"
                objectFit="cover"
                mx="auto"
              />
            </Box>

            {/* Right Content */}
            <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} align={{ base: "center", lg: "start" }}>
              <VStack spacing={4} align={{ base: "center", lg: "start" }}>
                <Heading size="lg" color="blue.500">
                  Hello, I'm{' '}
                  <Typewriter 
                    texts={[
                      "Programmer",
                      "Junior Software Engineer",
                      "Web Developer",
                    ]}
                    speed={80}
                    deleteSpeed={50}
                    pauseTime={1500}
                    infinite={true}
                  />
                </Heading>
                <Text fontSize="xl" color={textColor} maxW="600px">
                I am a junior software engineer with over a year of experience in application development.
                </Text>
                <HStack spacing={4}>
                  <Button colorScheme="blue" onClick={() => window.open('https://github.com/naufalghafirr', '_blank')} size="lg">
                    View My Projects
                  </Button>
                  <CVModal />
                </HStack>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center">About Me</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="center">
              {/* Left Content */}
              <VStack spacing={6} align="left">
                <Text fontSize="lg" color={textColor} textAlign="justify">
                  I am a developer with a passion for web technology. 
                  With experience in various modern technologies, I enjoy creating 
                  efficient and user-friendly solutions.
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="justify">
                  Besides coding, I also enjoy learning new technologies and sharing 
                  knowledge with the developer community. I believe technology 
                  should be used to make life better.
                </Text>
                <HStack spacing={4} wrap="wrap">
                  <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                    {countExperience}+ Years Experience
                  </Badge>
                  <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                    {countProjects} Projects
                  </Badge>
                  <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                    {countEducation} Education
                  </Badge>
                  <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>
                    {countCertifications} Certifications
                  </Badge>
                </HStack>
              </VStack>
              
              {/* Right Image */}
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="/image/profile.jpg"
                  alt="Profile"
                  h="400px"
                  w="400px"
                  objectFit="cover"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py={20}>
  <Container maxW="container.xl">
    <VStack spacing={12}>
      <Heading size="xl" textAlign="center">
        My Skills
      </Heading>

      <SimpleGrid
        textAlign="center"
        columns={{ base: 2, md: 4, lg: 7 }}
        spacing={8}
        maxW="container.lg"
        mx="auto"
        justifyItems="center"    
        alignItems="center"  
      >
        {skills.map((skill) => (
          <VStack key={skill.name} spacing={3} align="center">
            <Icon as={skill.icon} boxSize={12} color={skill.color} />
            <Text fontWeight="medium">{skill.name}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      <Divider />

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        w="full"
        justifyContent="center"
        maxW="800px"
        mx="auto"
      >
        <CardSkills
          cardBg={cardBg}
          textColor={textColor}
          title="Frontend Development"
          description="Developing responsive and interactive user interfaces using Next.js, Laravel, and other modern frameworks."
        />

        <CardSkills
          cardBg={cardBg}
          textColor={textColor}
          title="Backend Development"
          description="Developing stable and scalable APIs using Next.js, Laravel, and various databases like MySQL and PostgreSQL."
        />
      </SimpleGrid>
    </VStack>
  </Container>
</Box>


      {/* Projects Section */}
      <ProjectsSection 
        cardBg={cardBg}
        textColor={textColor}
        projects={projects}
      />

      {/* Education Section */}
      <EducationSection 
        cardBg={cardBg}
        textColor={textColor}
        education={education}
      />

      {/* Certification Section */}
      <CertificationSection 
        cardBg={cardBg}
        textColor={textColor}
        certifications={certifications}
      />

      {/* Contact Section */}
      <Box id="contact" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center">Contact Me</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="start">
              <VStack spacing={6} align="start">
                <Heading size="lg">Let's Collaborate!</Heading>
                <Text fontSize="lg" color={textColor}>
                  I'm always open to discussing new projects, 
                  creative ideas, or opportunities to be part of your vision.
                </Text>
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FaEnvelope} color="blue.500" />
                    <Text><Link href="mailto:naufalghafir123@gmail.com" target="_blank">naufalghafir123@gmail.com</Link></Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaLinkedin} color="blue.500" />
                    <Text><Link href="https://www.linkedin.com/in/naufal-ghafir" target="_blank">Naufal Ghafir</Link></Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaGithub} color="gray.600" />
                    <Text><Link href="https://github.com/naufalghafirr" target="_blank">Naufal Ghafir</Link></Text>
                  </HStack>
                </VStack>
              </VStack>
              
              <Contact handleSendMessage={handleSendMessage} formData={formData} handleChange={handleChange} isLoading={loading} cardBg={cardBg} />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg={cardBg} py={8}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            {/* <HStack spacing={6}>
              <IconButton
                icon={<FaGithub />}
                variant="ghost"
                aria-label="GitHub"
              />
              <IconButton
                icon={<FaLinkedin />}
                variant="ghost"
                aria-label="LinkedIn"
              />
              <IconButton
                icon={<FaTwitter />}
                variant="ghost"
                aria-label="Twitter"
              />
              <IconButton
                icon={<FaEnvelope />}
                variant="ghost"
                aria-label="Email"
              />
            </HStack> */}
            <Text color={textColor} textAlign="center">
              © {new Date().getFullYear()} Naufal Ghafir Ramadhan.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

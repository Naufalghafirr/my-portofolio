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
  CardBody,
  Input,
  Textarea,
  CardHeader,
  Badge,
  Icon,
  Flex,
  Spacer,
  Link,
  Image,
  Divider,
  useColorModeValue,
  IconButton,
  Center,
  Stack
} from '@chakra-ui/react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaDatabase,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaHome,
} from 'react-icons/fa'
import axios from 'axios'
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
    {anchor: "#certifications", title: "Sertifikasi"},
    {anchor: "#contact", title: "Contact"}
  ]

  const skills = [
    { name: 'React', icon: FaReact, color: 'blue.400' },
    { name: 'JavaScript', icon: FaJs, color: 'yellow.400' },
    { name: 'PHP', icon: FaPhp, color: 'blue.500' },
    { name: 'HTML5', icon: FaHtml5, color: 'orange.400' },
    { name: 'MySQL', icon: FaDatabase, color: 'green.400' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'blue.300' },
    { name: 'MongoDB', icon: FaDatabase, color: 'green.400' },
    { name: 'Laravel', icon: FaPhp, color: 'red.500' },
    { name: 'git', icon: FaCode, color: 'orange.400' },
    { name: 'UI/UX Design', icon: FaPalette, color: 'purple.400' },
    { name: 'Next js', icon: FaReact, color: 'blue.400' },
  ]

  const projects = [
    {
      title: 'E-Tiket Platform Genstix.id',
      description: 'Development platform e-tiket lengkap dengan sistem pembayaran dan manajemen event.',
      tech: ['next js', 'Postgres'],
      image: '/projectImage/logo-gentix.png',
      link: 'https://genstix.id',
      jobTitle: 'Frontend Developer'
    },
    {
      title: 'Pkk Application',
      description: 'Development aplikasi pkk lengkap dengan sistem pencatatan data perpustakaan, posyandu, dan lainnya.',
      tech: ['Laravel', 'MySQL'],
      code: 'https://github.com/Ardiiysh/Apk-pkk-l8/tree/codinggofir',
      jobTitle: 'Fullstack Developer'
    },
    {
      title: 'KBM Application',
      description: 'Development aplikasi tempat membaca buku.',
      tech: ['Codeigniter 4', 'MongoDB'],
      image: '/projectImage/logo-kbm.png',
      link: 'https://kbm.id',
      jobTitle: 'Fullstack Developer'
    }
  ]

  const education = [
    {
      title: 'Universitas Pamulang',
      description: 'Mahasiswa Sistem Infromasi dengan fokus pada pengembangan web dan mobile application.',
      tech: ['Sistem Infromasi', 'S1'],
      year: '2024 - Sekarang',
    },
    {
      title: 'SMK Wikrama 1 Garut',
      description: 'Lulusan Rekayasa Perangkat Lunak dengan predikat terbaik.',
      tech: ['Rekayasa Perangkat Lunak', 'SMK'],
      year: '2021 - 2023',
    },
    {
      title: 'SMP IT Nururrahman',
      description: 'Lulusan dengan nilai rata-rata yang baik dan aktif dalam kegiatan ekstrakurikuler.',
      tech: ['SMP', 'Depok'],
      year: '2018 - 2021',
    }
  ]

  const certifications = [
    {
      title: 'Toeic dengan nilai 505',
      description: 'Sertifikasi bahasa inggris dengan nilai 505.',
      issuer: 'TOEIC',
      type: 'English',
      date: '2 Agustus 2021',
      image: '/certifications/toeic.pdf'
    },
    {
      title: 'Dasar Pemrograman Web',
      description: 'Sertifikasi untuk menguasai dasar pemrograman web.',
      issuer: 'Dicoding',
      type: 'Web Development',
      date: '29 Maret 2023',
      image: '/certifications/dasar_web.pdf'
    },
    {
      title: 'Certiport Certification',
      description: 'Sertifikasi profesional dalam bidang teknologi informasi dan komunikasi.',
      issuer: 'Certiport',
      type: 'IT Certification',
      date: '12 Juni 2023',
      image: '/certifications/certificate certiport.pdf'
    },
    {
      title: 'Belajar Dasar Pemrograman Web ke 2',
      description: 'Sertifikasi algoritma dan struktur data menggunakan JavaScript.',
      issuer: 'freeCodeCamp',
      type: 'Web Development',
      date: '18 September 2024',
      image: '/certifications/dasar_web2.pdf'
    },
    {
      title: 'IDCamp x Dicoding',
      description: 'Beyond the Basics: Elevate Your Career as a Full Stack Developer in 2024',
      issuer: 'Dicoding',
      type: 'Full Stack Development',
      date: '26 September 2024',
      image: '/certifications/idcamp.pdf'
    },
    
    {
      title: 'Dasar Pemrograman JavaScript',
      description: 'Sertifikasi dasar untuk memahami dasar pemrograman JavaScript.',
      issuer: 'Dicoding',
      type: 'JavaScript',
      date: '27 September 2024',
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
            {/* Gambar Profil Kiri */}
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

            {/* Konten Kanan */}
            <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} align={{ base: "center", lg: "start" }}>
              <VStack spacing={4} align={{ base: "center", lg: "start" }}>
                <Heading size="lg" color="blue.500">
                  Halo, Saya{' '}
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
                Saya adalah seorang junior software engineer dengan pengalaman lebih dari satu tahun dalam pengembangan aplikasi  .
                </Text>
                <HStack spacing={4}>
                  <Button colorScheme="blue" onClick={() => window.open('https://github.com/naufalghafirr', '_blank')} size="lg">
                    Lihat Proyek Saya
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
            <Heading size="xl" textAlign="center">Tentang Saya</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="center">
              {/* Konten Kiri */}
              <VStack spacing={6} align="left">
                <Text fontSize="lg" color={textColor} textAlign="justify">
                  Saya adalah seorang developer yang memiliki passion dalam teknologi web. 
                  Dengan pengalaman dalam berbagai teknologi modern, saya senang menciptakan 
                  solusi yang efisien dan user-friendly.
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="justify">
                  Selain coding, saya juga suka belajar teknologi baru dan berbagi 
                  pengetahuan dengan komunitas developer. Saya percaya bahwa teknologi 
                  harus digunakan untuk membuat hidup lebih baik.
                </Text>
                <HStack spacing={4} wrap="wrap">
                  <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                    {countExperience} Tahun Pengalaman
                  </Badge>
                  <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                    {countProjects} Proyek Selesai
                  </Badge>
                  <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                    {countEducation} Pendidikan Selesai
                  </Badge>
                  <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>
                    {countCertifications} Sertifikasi
                  </Badge>
                </HStack>
              </VStack>
              
              {/* Gambar Kanan */}
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
        Keahlian Saya
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
          description="Mengembangkan antarmuka pengguna yang responsif dan interaktif menggunakan Next.js, Laravel, dan framework modern lainnya."
        />

        <CardSkills
          cardBg={cardBg}
          textColor={textColor}
          title="Backend Development"
          description="Mengembangkan API yang stabil dan skalabel menggunakan Next.js, Laravel, serta berbagai database seperti MySQL dan PostgreSQL."
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
            <Heading size="xl" textAlign="center">Hubungi Saya</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="start">
              <VStack spacing={6} align="start">
                <Heading size="lg">Mari Berkolaborasi!</Heading>
                <Text fontSize="lg" color={textColor}>
                  Saya selalu terbuka untuk mendiskusikan proyek baru, 
                  ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
                </Text>
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FaEnvelope} color="blue.500" />
                    <Text><Link href="mailto:naufalghafir123@gmail.com" target="_blank">naufalghafir123@gmail.com</Link></Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaLinkedin} color="blue.500" />
                    <Text><Link href="https://www.linkedin.com/in/naufal-ghafir" target="_blank">Naufal Gahfir</Link></Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaGithub} color="gray.600" />
                    <Text><Link href="https://github.com/naufalghafirr" target="_blank">Naufal Gahfir</Link></Text>
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
              © 2025 Naufal Ghafir Ramadhan.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

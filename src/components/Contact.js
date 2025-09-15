import {
  Card,
  VStack,
  Box,
  Text,
  Input,
  Textarea,
  Button,
  Heading,
} from '@chakra-ui/react';

const Contact = ({ formData, handleChange, isLoading, handleSendMessage, cardBg }) =>   {
  return (
    <Card bg={cardBg} p={8}>
      <VStack spacing={6}>
        <Heading size="md">Kirim Pesan</Heading>
        <VStack spacing={4} w="full" as="form" onSubmit={handleSendMessage}> {/* Tambahkan as="form" dan onSubmit */}
          <Box w="full">
            <Text mb={2}>Nama</Text>
            <Input
              type="text"
              name="name"
              h="40px"
              bg="gray.100"
              borderRadius="md"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama..."
              required // Tambahkan validasi dasar
            />
          </Box>
          <Box w="full">
            <Text mb={2}>Email</Text>
            <Input
              type="email"
              name="email"
              h="40px"
              bg="gray.100"
              borderRadius="md"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email..."
              required // Tambahkan validasi dasar
            />
          </Box>
          <Box w="full">
            <Text mb={2}>Pesan</Text>
            <Textarea
              name="message"
              h="120px"
              bg="gray.100"
              placeholder="Masukkan pesan..."
              borderRadius="md"
              value={formData.message}
              onChange={handleChange}
              required // Tambahkan validasi dasar
            />
          </Box>
          <Button type="submit" colorScheme="blue" w="full" isLoading={isLoading} loadingText="Mengirim..."> {/* Gunakan type="submit" dan isLoading */}
            Kirim Pesan
          </Button>
        </VStack>
      </VStack>
    </Card>
  );
};

export default Contact;
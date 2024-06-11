import { Box, Container, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg">
      {/* Header */}
      <Box as="header" py={4} borderBottom="1px solid" borderColor="gray.200">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg">My Personal Blog</Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
          </HStack>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md">Blog Post Title 1</Heading>
            <Text fontSize="sm" color="gray.500">January 1, 2023</Text>
            <Text mt={2}>This is a short excerpt from the blog post...</Text>
          </Box>
          <Divider />
          <Box>
            <Heading as="h2" size="md">Blog Post Title 2</Heading>
            <Text fontSize="sm" color="gray.500">February 1, 2023</Text>
            <Text mt={2}>This is another short excerpt from a different blog post...</Text>
          </Box>
          <Divider />
          {/* Add more blog posts as needed */}
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} borderTop="1px solid" borderColor="gray.200" textAlign="center">
        <Text fontSize="sm">© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
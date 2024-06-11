import { Box, Container, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack justifyContent="space-between">
            <Heading as="h1" size="lg">My Personal Blog</Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/">Home</Link>
              <Link as={RouterLink} to="/about">About</Link>
              <Link as={RouterLink} to="/blog">Blog</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
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
          <Box>
            <Heading as="h2" size="md">Blog Post Title 3</Heading>
            <Text fontSize="sm" color="gray.500">March 1, 2023</Text>
            <Text mt={2}>Yet another short excerpt from yet another blog post...</Text>
          </Box>
        </VStack>
      </Container>

      <Box as="footer" bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
import React from "react";
import { Box, SimpleGrid, Heading, Text, Link, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="brandGrayDark" color="whiteAlpha.800" py={10} px={5}>
      <SimpleGrid maxW="1200px" mx="auto" columns={[1, 3]} spacing={6}>
        <VStack align="start" spacing={3}>
          <Heading size="md" color="brandAccent">About</Heading>
          <Text>World travel guide inspired travel site providing curated destinations and trip guides.</Text>
        </VStack>
        <VStack align="start" spacing={3}>
          <Heading size="md" color="brandAccent">Quick Links</Heading>
          <Link href="/">Home</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/plantrip">Plan Trip</Link>
          <Link href="/dashboard">Dashboard</Link>
        </VStack>
        <VStack align="start" spacing={3}>
          <Heading size="md" color="brandAccent">Follow Us</Heading>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
        </VStack>
      </SimpleGrid>
      <Text textAlign="center" mt={10} fontSize="sm" color="gray.400">
        © 2025 Perfect Trip. All rights reserved.
      </Text>
    </Box>
  );
}

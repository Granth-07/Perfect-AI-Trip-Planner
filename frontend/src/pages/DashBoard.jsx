import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Box maxW="1200px" mx="auto" p={8}>
        <Heading mb={6}>Dashboard</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Box p={6} bg="white" boxShadow="md" borderRadius="md">
            <Heading size="md" mb={3}>Saved Trips</Heading>
            <Text>You have no saved trips yet.</Text>
          </Box>
          <Box p={6} bg="white" boxShadow="md" borderRadius="md">
            <Heading size="md" mb={3}>Bucket List</Heading>
            <Text>Your bucket list is empty.</Text>
          </Box>
          <Box p={6} bg="white" boxShadow="md" borderRadius="md">
            <Heading size="md" mb={3}>Newsletter</Heading>
            <Text>You are subscribed with your email address.</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}

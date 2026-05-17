import React from "react";
import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";

const destinations = [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "Tokyo", image: "/images/tokyo.jpg" },
  { name: "New York", image: "/images/newyork.jpg" },
  { name: "Goa", image: "/images/goa.jpg" },
  { name: "London", image: "/images/london.jpg" },
];

export default function GuideGrid() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6} mx="auto" maxW="1200px" my={10} px={4}>
      {destinations.map(({ name, image }) => (
        <Box
          key={name}
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          transition="all 0.3s ease-in-out"
        >
          <Image src={image} alt={name} objectFit="cover" width="100%" height="180px" />
          <Box p={3}>
            <Heading size="md">{name}</Heading>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

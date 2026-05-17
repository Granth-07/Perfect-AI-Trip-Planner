import React from "react";
import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";

const trips = [
  {
    name: "Paris Adventure",
    image: "/images/paris.jpg",
    rating: 4.8,
    highlights: "Eiffel Tower, Louvre, Seine cruise",
  },
  {
    name: "Tokyo Lights",
    image: "/images/tokyo.jpg",
    rating: 4.7,
    highlights: "Shibuya Crossing, temples, nightlife",
  },
  {
    name: "Goa Beaches",
    image: "/images/goa.jpg",
    rating: 4.6,
    highlights: "Beaches, water sports, nightlife",
  },
];

export default function TripsList() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mx="auto" maxW="1200px" my={10} px={4}>
      {trips.map(({ name, image, rating, highlights }) => (
        <Box
          key={name}
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          cursor="pointer"
          _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
          transition="all 0.3s ease-in-out"
        >
          <Image src={image} alt={name} height="180px" objectFit="cover" width="100%" />
          <Box p={3}>
            <Heading size="md">{name}</Heading>
            <Text fontSize="sm" color="gray.600">{highlights}</Text>
            <Text fontWeight="bold" mt={2} color="brandAccent">Rating: {rating}</Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

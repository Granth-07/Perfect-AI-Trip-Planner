import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const trips = [
  {
    id: "paris-adventure",
    name: "Paris Adventure",
    image: "/images/paris.jpg",
    highlights: "Eiffel Tower, Louvre, Seine River Cruise",
  },
  {
    id: "tokyo-lights",
    name: "Tokyo Lights",
    image: "/images/tokyo.jpg",
    highlights: "Shibuya Crossing, Temples, Neon Nights",
  },
  {
    id: "goa-beaches",
    name: "Goa Beaches",
    image: "/images/goa.jpg",
    highlights: "Sunny beaches, water sports, local culture",
  },
];

export default function Trips() {
  return (
    <Box maxW="1200px" mx="auto" px={4} py={8}>
      <Heading mb={6} textAlign="center" color="brandBlue">
        Curated Trips
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {trips.map(({ id, name, image, highlights }) => (
          <Link key={id} to={`/trips/${id}`} style={{ textDecoration: "none" }}>
            <Box
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              cursor="pointer"
              _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
              transition="all 0.3s ease-in-out"
              bg="white"
            >
              <Image src={image} alt={name} objectFit="cover" height="200px" width="100%" />
              <VStack p={4} align="start" spacing={1}>
                <Heading size="md" color="brandBlue">{name}</Heading>
                <Text fontSize="sm" color="gray.600">{highlights}</Text>
              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}

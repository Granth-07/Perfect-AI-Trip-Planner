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

const destinations = [
  { id: "paris", name: "Paris", image: "/images/paris.jpg" },
  { id: "tokyo", name: "Tokyo", image: "/images/tokyo.jpg" },
  { id: "newyork", name: "New York", image: "/images/newyork.jpg" },
  { id: "goa", name: "Goa", image: "/images/goa.jpg" },
  { id: "london", name: "London", image: "/images/london.jpg" },
];

export default function Destinations() {
  return (
    <Box maxW="1200px" mx="auto" px={4} py={8}>
      <Heading mb={6} textAlign="center" color="brandBlue">
        Explore Destinations
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {destinations.map(({ id, name, image }) => (
          <Link key={id} to={`/destinations/${id}`} style={{ textDecoration: "none" }}>
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
              <VStack p={4} align="start">
                <Heading size="md" color="brandBlue">
                  {name}
                </Heading>
              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}

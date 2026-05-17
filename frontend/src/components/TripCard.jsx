import React from "react";
import { Box, Image, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function TripCard({ id, name, image, highlights, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        cursor="pointer"
        bg="white"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
      >
        <Image src={image} alt={name} objectFit="cover" height="200px" width="100%" />
        <VStack p={4} align="start" spacing={1}>
          <Heading size="md" color="brandBlue">{name}</Heading>
          {highlights && <Text fontSize="sm" color="gray.600">{highlights}</Text>}
        </VStack>
      </Box>
    </Link>
  );
}

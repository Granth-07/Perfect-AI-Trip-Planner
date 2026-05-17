import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const destinations = {
  tokyo: {
    name: "Tokyo",
    description: "Modern city blended with tradition.",
  },
  paris: {
    name: "Paris",
    description: "The beautiful City of Light.",
  },
  // Add more destinations as needed
};

export default function DestinationDetails() {
  const { city } = useParams();
  const destination = destinations[city.toLowerCase()];

  if (!destination)
    return (
      <Box p={8}>
        <Heading>Destination Not Found</Heading>
      </Box>
    );

  return (
    <Box p={8}>
      <Heading mb={4}>{destination.name}</Heading>
      <Text fontSize="lg">{destination.description}</Text>
    </Box>
  );
}

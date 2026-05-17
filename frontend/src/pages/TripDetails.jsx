import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate data fetch - replace with actual API fetch
  useEffect(() => {
    async function fetchTrip() {
      setLoading(true);
      try {
        // Replace with real fetch call e.g.:
        // const response = await fetch(`/api/trips/${id}`);
        // const data = await response.json();

        // Mock data for demo:
        const data = {
          id,
          name: "Paris Adventure",
          highlights: "Eiffel Tower, Louvre Museum, Seine River Cruise",
          itinerary: "Day 1: Visit Eiffel Tower...\nDay 2: Explore Louvre...",
          coverImage: "/images/paris.jpg",
          mapUrl: "https://maps.google.com/?q=Paris",
        };

        setTrip(data);
      } catch (err) {
        setError("Failed to load trip details.");
      }
      setLoading(false);
    }

    fetchTrip();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Text color="red.500" textAlign="center" mt={10}>{error}</Text>;

  return (
    <Box maxW="900px" mx="auto" p={6}>
      <Image src={trip.coverImage} alt={trip.name} borderRadius="md" mb={6} />
      <Heading mb={2} color="brandBlue">{trip.name}</Heading>
      <Text mb={4} fontSize="md" color="gray.600">{trip.highlights}</Text>
      <Box whiteSpace="pre-wrap" mb={6} fontSize="md" color="gray.700">
        {trip.itinerary}
      </Box>
      <Box>
        <Heading size="sm" mb={2}>Map</Heading>
        {/* Map placeholder */}
        <iframe
          title="Trip Map"
          src={trip.mapUrl}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}

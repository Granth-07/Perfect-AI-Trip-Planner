import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export default function AITripPlanner() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [preferences, setPreferences] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleGenerate = async () => {
    if (!destination || !budget || !duration) {
      toast({
        title: "Please fill destination, budget, and duration",
        status: "warning",
        duration: 3000,
      });
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/trip-plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          budget,
          duration,
          preferences,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to generate plan");
      }

      const data = await res.json();
      setResult(data.itinerary);
    } catch (err) {
      toast({
        title: err.message || "Error generating trip plan",
        status: "error",
        duration: 3000,
      });
    }

    setLoading(false);
  };

  return (
    <Box maxW="600px" mx="auto" p={8} bg="white" borderRadius="xl" boxShadow="lg" mt={10}>
      <Heading mb={6} color="blue.600" textAlign="center">
        AI Trip Planner
      </Heading>
      <VStack spacing={4}>
        <Input placeholder="Destination (e.g. Paris)" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <Input placeholder="Budget (e.g. 2000)" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        <Input placeholder="Duration (days)" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <Input placeholder="Preferences (e.g. museums, food)" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
        <Button
          colorScheme="red"
          variant="solid"
          size="lg"
          width="full"
          onClick={handleGenerate}
          isLoading={loading}
          fontWeight="bold"
          mt={2}
        >
          Generate Plan
        </Button>
      </VStack>
      {result && (
        <Box mt={6} p={4} bg="gray.50" borderRadius="md" whiteSpace="pre-wrap" color="gray.800">
          <Text>{result}</Text>
        </Box>
      )}
    </Box>
  );
}

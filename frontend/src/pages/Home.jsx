import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import GuideGrid from "../components/GuideGrid";
import AITripPlanner from "../components/AITripPlanner";
import TripsList from "../components/TripsList";
import NewsletterSignUp from "../components/NewsletterSignUp";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";  // Import the carousel

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Box
        position="relative"
        minHeight="60vh"
        bgImage="url('/images/hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
      >
        <Box bg="rgba(0, 119, 204, 0.5)" position="absolute" inset={0} />
        <Box
          position="relative"
          maxW="600px"
          mx="auto"
          py={24}
          px={6}
          textAlign="center"
          color="white"
        >
          <Heading fontSize={["3xl", "5xl"]} fontWeight="bold" mb={4}>
            Discover Your Next Adventure
          </Heading>
          <Text fontSize={["lg", "xl"]} mb={6}>
            Explore destinations, plan trips, and make memories.
          </Text>
          {/* You can add search bar here */}
        </Box>
      </Box>

      {/* Image Carousel inserted here */}
      <ImageCarousel />

      <GuideGrid />
      <AITripPlanner />
      <TripsList />
      <NewsletterSignUp />
      <Footer />
    </>
  );
}

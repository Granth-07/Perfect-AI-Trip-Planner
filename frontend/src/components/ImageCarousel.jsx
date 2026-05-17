import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/images/paris.jpg",
    caption: "Paris - The City of Lights",
  },
  {
    image: "/images/tokyo.jpg",
    caption: "Tokyo - Modern & Tradition",
  },
  {
    image: "/images/goa.jpg",
    caption: "Goa - Beaches and Nightlife",
  },
];

export default function ImageCarousel() {
  return (
    <Box maxW="700px" mx="auto" mt={6} borderRadius="lg" overflow="hidden" boxShadow="lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        style={{ width: "100%", height: "350px" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Box position="relative" w="100%" h="350px">
              <img
                src={slide.image}
                alt={slide.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Text
                position="absolute"
                bottom="16px"
                left="16px"
                color="white"
                bg="rgba(0,0,0,0.5)"
                px={4}
                py={2}
                borderRadius="md"
                fontSize="lg"
                fontWeight="bold"
                boxShadow="md"
              >
                {slide.caption}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

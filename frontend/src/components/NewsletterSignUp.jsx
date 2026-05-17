import React, { useState } from "react";
import { Box, Heading, Input, Button, VStack, useToast } from "@chakra-ui/react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Please enter your email", status: "warning", duration: 3000 });
      return;
    }
    toast({ title: "Subscribed!", description: "Thank you for joining!", status: "success", duration: 3000 });
    setEmail("");
  };

  return (
    <Box bg="brandBlue" py={10} px={4} color="white" textAlign="center" maxW="600px" mx="auto" borderRadius="xl">
      <Heading mb={4}>Stay Updated!</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input 
            type="email"
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            bg="white" 
            color="black" 
          />
          <Button type="submit" colorScheme="brandAccent" width="full">
            Subscribe
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

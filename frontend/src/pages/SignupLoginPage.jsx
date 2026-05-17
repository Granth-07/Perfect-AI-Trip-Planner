import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Divider,
  VStack,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function SignupLoginPage() {
  const [email, setEmail] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  return (
    <Box bg="#e9f4fb" minH="100vh">
      <Flex justify="center" align="center" minH="100vh" px={2}>
        {/* Left side */}
        <Box flex={1} mr={{ md: 12 }} p={6} display={{ base: "none", md: "block" }}>
          <Heading color="blue.600" mb={6} fontSize="2xl">
            The trip of your dreams starts<br /> with Travel Explorer
          </Heading>
          <Text fontSize="lg">
            Covering hundreds of destinations and countless experiences, Travel Explorer is your guide for traveling better and smarter.
          </Text>
        </Box>

        {/* Right side signup form */}
        <Box
          bg="white"
          flex={1}
          px={{ base: 4, md: 8 }}
          py={8}
          borderRadius="2xl"
          boxShadow="lg"
          minW={{ base: "100%", md: "400px" }}
        >
          <Heading size="md" mb={5}>Create Your Account</Heading>
          <Text fontSize="sm" color="gray.500" mb={6}>
            Sign up to Travel Explorer to continue.
          </Text>
          <VStack spacing={4} align="stretch">
            <Button leftIcon={<FaGoogle />} colorScheme="gray" variant="outline">
              Continue with Google
            </Button>
            <Button leftIcon={<FaFacebook />} colorScheme="gray" variant="outline">
              Continue with Facebook
            </Button>
            <Divider my={3} />
            <Text textAlign="center" color="gray.400" fontSize="sm">OR</Text>
            <Input
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outline"
              size="lg"
              required
            />
            <Checkbox
              isChecked={isHuman}
              onChange={e => setIsHuman(e.target.checked)}
              colorScheme="blue"
            >
              I’m not a robot
            </Checkbox>
            <Box border="1px solid #eee" rounded="lg" p={2} bg="#f6f9fa" textAlign="center" fontSize="xs" color="gray.400">
              {/* Placeholder for reCAPTCHA */}
              reCAPTCHA checkbox here
            </Box>
            <Button
              colorScheme="blue"
              size="lg"
              mt={2}
              rounded="full"
              fontWeight="bold"
              disabled={!email || !isHuman}
            >
              Continue
            </Button>
            <Text textAlign="center" mt={2}>
              Already have an account?
              <Link as={RouterLink} ml={2} color="blue.600" to="/login">
                Log in
              </Link>
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

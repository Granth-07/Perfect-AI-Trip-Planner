import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Text,
  VStack,
  useToast,
  Link,
} from "@chakra-ui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    if (!email || !password) {
      toast({
        title: "Please enter both email and password",
        status: "error",
        duration: 3000,
      });
      return;
    }

    // TODO: Replace this with actual login API call
    setTimeout(() => {
      toast({
        title: "Login successful!",
        status: "success",
        duration: 3000,
      });
      // On success, redirect or update user state here...
    }, 1000);
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast({
        title: "Please enter your email address to reset password",
        status: "info",
        duration: 3000,
      });
      return;
    }
    // TODO: Implement password reset API call and email flow
    toast({
      title: `Password reset link sent to ${email}`,
      status: "success",
      duration: 3000,
    });
  };

  return (
    <Box p={8} maxW="400px" mx="auto" bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox
          isChecked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          colorScheme="blue"
        >
          Remember me
        </Checkbox>
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="link" color="blue.600" onClick={handleForgotPassword} textAlign="left" pl={0}>
          Forgot Password?
        </Button>
      </VStack>
    </Box>
  );
}

import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Trips", path: "/trips" },
  { name: "Plan Trip", path: "/plantrip" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children, to }) => (
    <Link
      px={3}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "brandBlue",
        color: "white",
      }}
      as={RouterLink}
      to={to}
    >
      {children}
    </Link>
  );

  return (
    <Box bg="white" px={4} boxShadow="md" position="fixed" width="100%" zIndex="1000">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} maxW="1200px" mx="auto">
        <Box>
          <Text fontWeight="bold" fontSize="xl" color="brandBlue" cursor="pointer" userSelect="none">
            PerfectTrip
          </Text>
        </Box>
        <Flex alignItems={"center"}>
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            <Button as={RouterLink} to="/login" colorScheme="blue" size="sm" variant="outline" mr={2}>
              Login
            </Button>
            <Button as={RouterLink} to="/signup" colorScheme="teal" size="sm" variant="solid">
              Signup
            </Button>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ml={2}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} bg="white">
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            <Button as={RouterLink} to="/login" colorScheme="blue" w="full" variant="outline" mb={2}>
              Login
            </Button>
            <Button as={RouterLink} to="/signup" colorScheme="teal" w="full" variant="solid">
              Signup
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

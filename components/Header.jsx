import React from "react";
import { Flex, Box, Heading, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.700"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link href="/">
            Yama Blog
          </Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          size="lg"
          bg="transparent"
          icon={<svg fill="white" width="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3.75C0 3.33579 0.335786 3 0.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H0.75C0.335786 4.5 0 4.16421 0 3.75Z" /><path d="M0 9.75C0 9.33579 0.335786 9 0.75 9H19.25C19.6642 9 20 9.33579 20 9.75C20 10.1642 19.6642 10.5 19.25 10.5H0.75C0.335786 10.5 0 10.1642 0 9.75Z" /><path d="M0.75 15C0.335786 15 0 15.3358 0 15.75C0 16.1642 0.335786 16.5 0.75 16.5H19.25C19.6642 16.5 20 16.1642 20 15.75C20 15.3358 19.6642 15 19.25 15H0.75Z" /></svg>}
        />
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        <Link href="https://github.com/yhoi">
          <IconButton
            aria-label="Github"
            size="lg"
            variant="ghost"
            color="white"
            icon={<FaGithub />}
          />
        </Link>
        <Link href="https://twitter.com/yuya__yamashita">
          <IconButton
            aria-label="LinkedIn"
            size="lg"
            variant="ghost"
            color="white"
            icon={<FaTwitter />}
          />
        </Link>
      </Box>
    </Flex>
)};

export default Header;

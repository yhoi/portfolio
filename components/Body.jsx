import React from "react";
import { Flex, Box, Text, Stack, Badge, SimpleGrid, Image } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {  SiFirebase } from "react-icons/si";
import projectData from "../public/data/projects";

const Body = () => {
  const renderProjectTags = (tags) => {
    return (
      <Stack isInline>
        {tags.map((tag) => (
          <Badge key={tag} variant="solid" colorScheme="gray">
            {tag}
          </Badge>
        ))}
      </Stack>
    );
  };

  return (
    <Box p={4}>
      <Text fontSize="3xl" mb={4}>
        About Me
      </Text>
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis quam in mauris
        blandit maximus. Vivamus vel nibh posuere, efficitur velit eu, lobortis magna. Nunc congue,
        felis a volutpat eleifend, dui mi ultrices nunc, in volutpat arcu lectus eget enim. Cras
        non pulvinar turpis. Vestibulum ac quam sapien. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nullam suscipit vitae enim sed accumsan.
        Etiam feugiat nulla nec diam sagittis, sed iaculis sapien gravida. Fusce porta elit ac
        eleifend hendrerit. Donec semper eros vel libero fermentum, ac lobortis lacus vulputate.
      </Text>

      <Text fontSize="3xl" mb={4}>
        Skills
      </Text>
      <SimpleGrid columns={[2, 2, 4]} spacing={4}>
        <Box textAlign="center">
          <FaHtml5 size="3em" />
          <Text mt={2}>HTML5</Text>
        </Box>
        <Box textAlign="center">
          <FaCss3Alt size="3em" />
          <Text mt={2}>CSS3</Text>
        </Box>
        <Box textAlign="center">
          <FaJs size="3em" />
          <Text mt={2}>JavaScript</Text>
        </Box>
        <Box textAlign="center">
          <FaReact size="3em" />
          <Text mt={2}>React</Text>
        </Box>
        <Box textAlign="center">
          <Text mt={2}>Next.js</Text>
        </Box>
        <Box textAlign="center">
          <SiFirebase size="3em" />
          <Text mt={2}>Firebase</Text>
        </Box>
      </SimpleGrid>

      <Text fontSize="3xl" mt={4} mb={4}>
        Projects
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {projectData.map((project) => (
          <Box key={project.id} borderWidth="1px" borderRadius="lg"
          overflow="hidden">
          <Image src={project.image} alt={project.title} />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {renderProjectTags(project.tags)}
            </Box>
  
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {project.title}
            </Box>
  
            <Box>{project.description}</Box>
  
            <Box d="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {project.date}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
  )
};

export default Body;
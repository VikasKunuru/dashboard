import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, HStack, VStack } from '@chakra-ui/react';
import imageSrc from '../assets/image3.png'
import check from '../assets/checkcircle3.png'

const FDInfoCard = ({ title, description, interest, buttonText, buttonColor }) => {

  return (
    <Box
    flex={1}
    p={4}
    bg="gray.50"
    borderRadius="md"
    shadow="md"
    textAlign="left"
    backgroundColor="#F4F4F4"
    border="4px solid #FFFFFF"
    opacity="1"
  >
    <Flex align="center" marginBottom={3}>
      <Image src={imageSrc} alt="Image" mr={2} backgroundColor="#F4F4F4" />
      <Heading as="h5" size="sm">
        {title}
      </Heading>
    </Flex>
    <HStack>
    <Box
        flex={1}
        background="#F4F4F4"
        borderRadius="5px"
        opacity="0.91"
        display="flex"
        alignItems="center"
        paddingLeft="10px" // Adjust padding as needed
        padding={1}
      >
        <Image src={check} alt="Image" mr={1} />
        <Text fontSize="sm" dangerouslySetInnerHTML={{ __html: "Crisil AAA Rated" }} />
      </Box>
      <Box
        flex={1}
        background="#F4F4F4"
        borderRadius="5px"
        opacity="0.91"
        display="flex"
        alignItems="center"
        paddingLeft="10px" // Adjust padding as needed
        padding={1}
      >
        <Image src={check} alt="Image" mr={1} />
        <Text  fontSize="xs" dangerouslySetInnerHTML={{ __html: "No Video KYC Required" }} />
      </Box>
    </HStack>
    <HStack justifyContent="space-between" paddingTop={4}>
  <VStack align="flex-start">
    <Text fontSize="sm" dangerouslySetInnerHTML={{ __html: "Interest Upto" }} />
    <Text fontSize="sm" fontWeight='bold' dangerouslySetInnerHTML={{ __html: "9.10% p.a" }} />
  </VStack>
  <Button
    fontSize="sm"
    px="2"
    py="1"
    color="white"
    background="#010101"
    boxShadow="0px 5px 5px #0000000D"
    borderRadius="5px"
    opacity="1"
  >
    {buttonText}
  </Button>
</HStack>
  </Box>
  );
}

export default FDInfoCard;

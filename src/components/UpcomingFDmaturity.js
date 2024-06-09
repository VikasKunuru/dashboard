import React from 'react';
import { Box, Heading, Text, Button, HStack, VStack, Flex } from '@chakra-ui/react';

const UpcomingFDmaturity = () => {
  return (
    <Box p={4} bg="gray.50" borderRadius="md" borderWidth="1px" shadow="md" alignItems={"flex-start"}>
    <Box alignContent={"flex-end"}>
    <Text fontSize='16px' align={"left"}>Upcoming FD Maturity</Text>
    <HStack marginTop={3}>
        <Box>
          <Text align={"left"} fontSize='12px'>Renew by</Text>
          <Box width={"76px"} height={"66px"} 
          backgroundColor="#F4F4F4"
          opacity="1"
          align={"left"}
          >
          <Text align={"center"} fontSize='40px'>30</Text></Box>
          <Box width={"76px"} height={"19px"} 
          backgroundColor="#CE5151"
          opacity="1"
          align={"left"}
          >
          <Text align={"center"} fontSize='12px'>oct, 2023</Text></Box>
          </Box>
        <Box>
          <Text fontSize='14px' as='b' textAlign={"left"}>Shriram Finance Corp FD 1</Text>
          <HStack marginLeft={5} marginTop={2}>
          <VStack >
          <Text fontSize='12px' textAlign={"left"}>Deposit Amt</Text><Text fontSize='14px' as='b' textAlign={"left"}>Rs 25,000</Text></VStack>
          <VStack marginLeft={2}>
          <Text fontSize='12px'>Tennure </Text><Text fontSize='14px' as='b'> 18 Months</Text></VStack>
          <VStack marginLeft={2}>
          <Text fontSize='12px'>Interest Rate </Text><Text fontSize='14px' as='b'> 8.10%</Text> </VStack></HStack>
          </Box>
      </HStack>
      <Flex justifyContent="center" width="100%" marginTop={5}> {/* Wrap buttons inside Flex */}
    <Button backgroundColor="#3B39D9" colorScheme='white'>Renew Now</Button>
    <Button
backgroundColor="white"
color="blue"
borderColor="blue"
borderWidth="1px" // Add this line to set the border width
ml={2}
_hover={{ bg: 'blue.50' }}
>
Compare other FDs
</Button></Flex>
</Box>
  </Box>
  );
}

export default UpcomingFDmaturity;

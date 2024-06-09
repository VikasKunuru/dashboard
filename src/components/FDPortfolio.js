import React from 'react';
import { Box, Heading, Button, Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChevronDownIcon } from '@chakra-ui/icons';

Chart.register(ArcElement, Tooltip, Legend);

const FDPortfolio = () => {
  const pieData = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [{
      data: [250000, 200000, 150000, 400000],
      backgroundColor: ['#6C63FF', '#FA9D17', '#B9C606', '#59CBD3'],
    }]
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right', // Position the legend on the right
        labels: {
          boxWidth: 20,
          padding: 15
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <Box flex={1} p={6} bg="gray.50" borderRadius="md" shadow="md" height="100%">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h3" size="md">Your FD Portfolio</Heading>
        <Menu>
        <MenuButton
  as={Button}
  colorScheme="white"
  rightIcon={<></>} // Remove default right icon
>
  <Box 
  width="110%"
  height='160%'
    color="black"
    border="1px"
    borderColor="grey.50"
    borderRadius="md"
    marginRight='5'
    display="flex" // Set display to flex
    alignItems="left" // Align items vertically
  >
    <Box flex="1"  height='150%' marginLeft={'1'} marginRight='2'textAlignxt={'left'}>Deposit Amt</Box> {/* Use flex to allow text to expand */}
    <ChevronDownIcon // Add ChevronDownIcon inside Box
      color="black" // Set color to black
      position="relative" // Position icon relatively
      left="1px" // Adjust left position as needed
    />
  </Box>
</MenuButton>
  <MenuList>
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
    <MenuItem>Option 3</MenuItem>
  </MenuList>
</Menu>
      </Flex>
      <Box width="100%" height="70%">
        <Pie data={pieData} options={pieOptions} />
      </Box>
    </Box>
  );
}

export default FDPortfolio;

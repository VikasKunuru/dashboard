import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Link,
  Image,
  Center
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { Chart, ArcElement, Tooltip, Legend, LineController, LinearScale, PointElement, LineElement, TimeScale, Title } from 'chart.js';
import 'chartjs-adapter-date-fns';

import FDPortfolio from './components/FDPortfolio';
import FDMaturityTimeline from './components/FDMaturityTimeline';
import FDInfoCard1 from './components/FDInfoCard1';
import FDInfoCard2 from './components/FDInfoCard2';
import FDInfoCard3 from './components/FDInfoCard3';
import FDInfoCard4 from './components/FDInfoCard4';
import VideoKYC from './components/VideoKYC';
import PendingPayment from './components/PendingPayment'
import UpcomingFDmaturity from './components/UpcomingFDmaturity';
import logo from './assets/logo-rackext-svgrepo-com.svg'; 

Chart.register(ArcElement, Tooltip, Legend, LineController, LinearScale, PointElement, LineElement, TimeScale, Title);

const App = () => {
  return (
    <Box >
    
      <Container
        maxW="container.xl"
        py={4}
        marginLeft={20}
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '1366px',
          height: '85px',
          background: '#FFFFFF',
          opacity: 1
        }}
      >
        <Flex
  as="nav"
  bg="white"
  p={4}
  justify="space-between" // Use space-between to separate items
  align="center"
  boxShadow="sm"
  border="1px solid rgba(0, 0, 0, 0.09)"
>
  <img
    src={logo}
    alt="Logo"
    style={{
      width: '40px',
      height: '44px',
      background: 'transparent url("img/logo-rackext-svgrepo-com.png") 0% 0% no-repeat padding-box',
      opacity: 1
    }}
  />
  <HStack spacing={8} align="center">
    <Text display={{ base: 'none', md: 'block' }}>Dashboard</Text>
    <Text display={{ base: 'none', md: 'block' }}>FAQs</Text>
    <Text display={{ base: 'none', md: 'block' }}>Support</Text>
    <Box
  style={{
    top: '10px',
    position: 'relative', // Adjust this if necessary
    width: '40px', // Adjust width as needed
    height: '40px', // Adjust height as needed
    background: 'transparent', // Adjust background as needed
    opacity: 1 // Adjust opacity as needed
  }}
>
  <Icon as={FaUserCircle} w={6} h={6} color="blue.500" />
</Box>
  </HStack>
</Flex>


      <Box p={10} boxShadow="sm" border="1px solid rgba(0, 0, 0, 0.09)">

        <VStack align="start" spacing={6}>
          <Heading as="h2" size="xl">Welcome, Johan Paul</Heading>

          <Flex w="full" direction={{ base: 'column', md: 'row' }} gap={6} align="stretch">
            <Box flex={1} height="100%">
              <FDPortfolio />
            </Box>
            <Box flex={2} height="100%">
              <FDMaturityTimeline />
            </Box>
          </Flex>

          <Flex w="full" direction={{ base: 'column', md: 'row' }} gap={0}>
          <Box flex="2"  >
            <HStack>
            <Box flex="1" bg="gray.50"  m={1} >
            <FDInfoCard1
              title="Utkarsh Small Finance Bank" 
              // description="Highest Interest Rate<br/>RBI Insured" 
              // interest="Interest Up to<br/>9.10% p.a" 
              buttonText="Book Now"
              buttonColor="#520B8D"
            />
            </Box>
            <Box flex="1" bg="gray.50"  m={1}>
            <FDInfoCard2
              title="Bajaj Finserv" 
              description="Crisil AAA Rated<br/>No Video KYC required" 
              interest="Interest Up to<br/>8.80% p.a" 
              buttonText="Book Now"
              buttonColor="blue"
            />
            </Box>
            </HStack>
            <HStack>
            <Box flex="1" bg="gray.50"  m={1}>
          <FDInfoCard3 
              title="Shiram Finance" 
              description="Crisil AAA Rated<br/>No Video KYC required" 
              interest="Interest Up to<br/>8.80% p.a" 
              buttonText="Book Now"
              buttonColor="blue"
            />
            </Box>
            <Box flex="1" bg="gray.50"  m={1}>
            <FDInfoCard4
              title="Mahindra Finance" 
              description="Crisil AAA Rated<br/>No Video KYC required" 
              interest="Interest Up to<br/>8.80% p.a" 
              buttonText="Book Now"
              buttonColor="blue"
            />
            </Box>
            
            </HStack>
            <Flex justifyContent="space-between">
      <Box m={2} p={4}>
      <Heading as="h5" m={0} size="sm">Get Answer</Heading>
      <Text>to all your questions</Text>
      </Box>
      <Box p={2} >
      <HStack spacing={1}>
      <Box p={1} color="black" fontSize="3xl">&lt;</Box> {/* Disabled Arrow */}
      <Box p={1} color="black" fontWeight={"bold"} fontSize="3xl">&gt;</Box> {/* Enabled Arrow */}
    </HStack>
      </Box>
      </Flex>
      <HStack>
            <Box flex={1} p={4} m={2} bg="gray.50" borderRadius="md" shadow="md" textAlign="left">
                <Heading as="h1" fontSize="l">How FDs are taxed</Heading>
               
                <Text mb={3} fontSize="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Link color="blue.500">Read More...</Link>
            </Box>
            <Box flex={1} p={4} m={2} bg="gray.50" borderRadius="md" shadow="md" textAlign="left">
            <Heading as="h1" fontSize="l">How FDs are taxed</Heading>
                
                <Text mb={3} fontSize="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
               
                <Link color="blue.500">Read More...</Link>
            </Box>
            <Box flex={1} p={4} m={2} bg="gray.50" borderRadius="md" shadow="md" textAlign="left">
            <Heading as="h1" fontSize="l">How FDs are taxed</Heading>
              
              <Text mb={3} fontSize="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Link color="blue.500">Read More...</Link>
            </Box>
        </HStack>
    
          </Box>
            <Box flex="1" bg="gray.50" m={2}>
            
            <Box flex={1}     textAlign="center">
            <VideoKYC />
            </Box>
            <Box flex="1" bg="gray.50"  >
            <PendingPayment/>
            </Box>
            <Box flex={1}   textAlign="center">
              <UpcomingFDmaturity/>
            </Box>
            </Box>
          </Flex>
        </VStack>
        </Box>
      </Container>
      
      </Box>
   
  );
}

export default App;

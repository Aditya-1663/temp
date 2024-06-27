
"use client"
import { Box, Button, Center, Container, Divider, Flex, Grid, GridItem, Image, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Datacontext from '../context/Datacontex';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
export default function Allpeople() {
  const context=useContext(Datacontext)
  const {data,getAllchar}= context
  
  const [url,seturl] = useState('https://swapi.dev/api/people/');
function fun(){ useEffect(()=>{
     
  
    getAllchar(url)

   
 },[]) }
fun();
console.log('Fetched data:', data.count);

  return (


    <>
   <Container h={'50vh'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} 
   backgroundImage={'https://images.unsplash.com/photo-1547700055-b61cacebece9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXIlMjB3YXJzfGVufDB8fDB8fHww'}
   backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      >
       
    </Container> 
    <Divider/>
    

   <Container h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
      >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
    All charcters ({data.count})
</Box>
       



<Wrap justify='center'>
          {data && data.results ? (
            data.results.map((data) => (

              <Link href="/charprofile"  passHref>
              <Peoplecard  data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

<Box h={'70px'} m={5}    > 
  <Flex  h={'100%'} direction={'row'} justify={'space-between'}>
  <Button leftIcon={<IoIosArrowRoundBack />} w={'100px'} h={'50px'} colorScheme='white' alignItems={'center'} _hover={{background:'white',color:'black'}} variant='outline'>
    Prev.
  </Button>
  <Box color={'white'}>
 {/* <PiLessThan/>
 <PiGreaterThan/> */}

  </Box>
  <Button onClick={()=>{seturl(data.next);fun();console.log(url)}} rightIcon={<IoIosArrowRoundForward />} w={'100px'} h={'50px'} colorScheme='white' alignItems={'center'} _hover={{background:'white',color:'black'}} variant='outline'>
    Next
  </Button>

  </Flex>
</Box>
      
      
    </Container> 


  
    
    </>
  )
}

import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, GridItem } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';


const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='red.600' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Hoff-Lu</Link>
    </Box>
    <Spacer />
    
    <Menu>
  <Box textAlign='center' fontSize={20} color='black.600' borderTop='1px' borderColor='gray.100'>
    
    <div >
    <Link href='/' passHref>
            Home&nbsp;&nbsp;&nbsp;</Link>
          <Link href='/search' passHref>Search&nbsp;&nbsp;&nbsp;</Link>
          <Link href='/search?purpose=for-sale' passHref>Buy Property&nbsp;&nbsp;&nbsp;
          </Link>
          <Link href='/search?purpose=for-rent' passHref>Rent Property&nbsp;&nbsp;&nbsp;
          </Link>
    </div> 
    </Box>
    </Menu>
  </Flex>
  
);

export default Navbar;

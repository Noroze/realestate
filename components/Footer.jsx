import { Box } from '@chakra-ui/layout';
import Link from 'next/link';
import {Menu } from '@chakra-ui/react';

export const Footer = () => (
  <Menu>
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    
    <div>
      <a href="https://www.privacypolicygenerator.info/live.php?token=vJFQtmBoQamU1ZN1aZumnMI9aBc6AzwY">&nbsp;Privacy Policy |</a> 
      <a href="https://www.termsandconditionsgenerator.com/live.php?token=GK9QmwJCh97QKmZe42NK1lYCn8iRDscz">&nbsp;Terms & Conditions |</a>
      <Link href='/About'>&nbsp;About us |</Link> 
      <Link href='/Contact'>&nbsp;Contact us</Link> 
    </div> 
    
    © 2022 Hoff-lu.com
, Inc. 
    </Box>
    </Menu>
    

);

export default Footer;
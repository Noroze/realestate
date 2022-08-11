import { Box } from '@chakra-ui/layout';
import Link from 'next/link';
import {Menu } from '@chakra-ui/react';

export const Footer = () => (
  <Menu>
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    
    <div>
      <a href="https://www.privacypolicygenerator.info/live.php?token=HjueTGKXXk5sYxtOTCJnpFD70JPxUQRd">&nbsp;Privacy Policy |</a> 
      <a href="https://www.termsandconditionsgenerator.com/live.php?token=ymtkch4LBM7A1TIeeWE37Br2Uia4Jvrh">&nbsp;Terms & Conditions |</a>
      <Link href='/About'>&nbsp;About us |</Link> 
      <Link href='/Contact'>&nbsp;Contact us</Link> 
    </div> 
    
    © 2022 Starvo, Inc. 
    </Box>
    </Menu>

);

export default Footer;
import React, { useState } from 'react';
import error from './assests/404.jpg'
import { Box, padding } from '@mui/system';
import { Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
const NotFound = () => {
    return ( <>
    <Container>
    <Box marginY={10}>
    <Box display="flex" justifyContent="center">
        <img src={error} sx={{textAlign:"center"}} width="40%" alt="" />
        </Box>
        <Typography variant='h3' sx={{color:"#d6d6cd", textAlign:"center", fontWeight:"800" , marginBottom:"4px"}}>PAGE NOT FOUND</Typography>
        <Typography textAlign={"center"} sx={{color:"#d6d6cd",  fontWeight:"500", paddingTop:"-30px"}} >We're sorry, the page you rendered could not be found,</Typography>
        <Typography textAlign={"center"} sx={{color:"#d6d6cd", fontWeight:"500", paddingTop:"-30px"}}>Please go back to the homepage </Typography>
        <Box display={"flex"} justifyContent={"center"} marginTop={"30px"}>
        <Button  sx={{paddingY:"7px",paddingX:"25px",color:"white", fontSize:"medium", fontWeight:"600", backgroundColor:"black", borderRadius:"20px", '&:hover':{backgroundColor:"black"},  }}>Go Home</Button>
        </Box>
        </Box>
        </Container>
    </> );
}
 
export default NotFound;
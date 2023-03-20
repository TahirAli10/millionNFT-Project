import React, { useState, useEffect } from 'react';
import { Box,Container } from '@mui/system';
import { Typography, Grid } from '@mui/material';
import logo from '../LandingPage/assests/logo.jpeg'
import Image from 'mui-image';

const Footer = () => {
    const data = {
        main:"Lorem ipsum corporis itaque nam ullam voluptates suscipit, consectetur eius excepturi sequi officiis error ea. Magnam, dolore laudantium! Maxime aut aliquid alias ipsam, fuga, a quae in dolores iusto voluptatum quasi!",
        about: {
            Title1:"Company Information",
            Title2:"Team Biography",
            Title3:"Social Media Links",
            Title4:"Career Opertunities",

        },
        Terms: {
            Title1:"Use of app",
            Title2:"Financial transactions",
            Title3:"Fee amd Commissions",
            Title4:"Associated Risks",

        },
        Limited : {
            Title1:"Termination adn Suspension",
            Title2:"Identification",
            Title3:"law and Jurisdiction",
            Title4:"Miscellaneous",

        }

    }
    return (<>
    
    <Container marginTop={"10px"}>
        <Box sx={{marginY:"80px"}}>
            <Grid container>
                <Grid item md={3} sm={6} xs={12}  bgColor={"red"}> 
                   
                <img src={logo} width='200px' height={"40px"} /><br/>

                <Typography variant='h5' sx={{color:"grey" , fontSize:"15px", lineHeight:"1rem", marginTop:"5px"}} width={"80%"}>{data.main}</Typography>
            
                </Grid>
                <Grid item md={3} sm={6} xs={12}  bgColor={"red"}>
                  <Typography variant='h6' xs={{textAlign:"center"}}>About Us</Typography>

                  <Typography variant='h6' marginTop={2} marginBottom={1} sx={{color:"grey", fontSize:"small"}}>{data.about.Title1}</Typography>
                  <Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.about.Title2}</Typography>
                  <Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.about.Title3}</Typography>
                  <Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.about.Title4} </Typography>


                </Grid>
                <Grid item md={3} sm={6} xs={12}  bgColor={"red"}>
                <Typography variant='h6' sx={{}}>Terms of Service</Typography>

<Typography variant='h6' marginTop={2} marginBottom={1} sx={{color:"grey", fontSize:"small"}}>{data.Terms.Title1}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Terms.Title2}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Terms.Title3}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Terms.Title4} </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12}  bgColor={"red"}>
                <Typography variant='h6' sx={{}}>Limited Liability</Typography>

<Typography variant='h6' marginTop={2} marginBottom={1} sx={{color:"grey", fontSize:"small"}}>{data.Limited.Title1}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Limited.Title2}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Limited.Title3}</Typography>
<Typography variant='h6' marginY={1} sx={{color:"grey", fontSize:"small"}}>{data.Limited.Title4} </Typography>
                </Grid>
              
            </Grid>
            </Box>
        </Container>
    </>  );
}
 
export default Footer;
import React from "react";
import { Container, Box, Grid, Typography , Tooltip, IconButton } from "@mui/material";
import "@fontsource/roboto";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from '@mui/icons-material/Group';
import { ReactComponent as Wave } from '../SVG/wave.svg';
import { ReactComponent as Wave2 } from '../SVG/wave (2).svg';

const LandingPage = () => {
  return (
    <>
      <Grid container style={{marginTop:"10px"}}>
        <Grid item xs={12} sm={3} display={"flex"} justifyContent={"center"} >
          <Box 
            width={'90%'} 
           height={"185px"}
            bgcolor={"#152238"}
            style={{
                position:"relative",
                borderRadius:"10px"
            }}
          >
            <Box   style={{marginLeft:"16px" , marginTop:"10px"}}> 
           
 
  <GroupIcon  fontSize="large" color="white" bgcolor="white" style={{padding:"5px", backgroundColor:"white" , borderRadius:"180px"}} />
 
             
            </Box>
            <Typography variant={"h4" } style={{marginLeft:"19px"}} color={"white"}>96</Typography>
            <Typography style={{marginLeft:"19px", fontSize:"small" }} color={"white"}>Total Customers</Typography>

            <Wave width={"100%"}   style={{position:"absolute" , bottom: "0px" ,   borderRadius:"10px"}} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} display={"flex"} justifyContent={"center"}>
          <Box 
            width={'90%'} 
           height={"165px"}
            bgcolor={"#152238"}
            style={{
                position:"relative",
                borderRadius:"10px"
            }}
          >
            <Box   style={{marginLeft:"16px" , marginTop:"10px"}}> 
           
 
  <GroupIcon  fontSize="large" color="white" bgcolor="white" style={{padding:"5px", backgroundColor:"white" , borderRadius:"180px"}} />
 
             
            </Box>
            <Typography variant={"h4" } style={{marginLeft:"19px"}} color={"white"}>96</Typography>
            <Typography style={{marginLeft:"19px", fontSize:"small" }} color={"white"}>Total Customers</Typography>

            <Wave2 width={"100%"}   style={{position:"absolute" , bottom: "0px" ,   borderRadius:"10px"}} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} display={"flex"} justifyContent={"center"}>
          <Box 
            width={'90%'} 
           height={"185px"}
            bgcolor={"#152238"}
            style={{
                position:"relative",
                borderRadius:"10px"
            }}
          >
            <Box   style={{marginLeft:"16px" , marginTop:"10px"}}> 
           
 
  <GroupIcon  fontSize="large" color="white" bgcolor="white" style={{padding:"5px", backgroundColor:"white" , borderRadius:"180px"}} />
 
             
            </Box>
            <Typography variant={"h4" } style={{marginLeft:"19px"}} color={"white"}>96</Typography>
            <Typography style={{marginLeft:"19px", fontSize:"small" }} color={"white"}>Total Customers</Typography>

            <Wave width={"100%"}   style={{position:"absolute" , bottom: "0px" ,   borderRadius:"10px"}} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} display={"flex"} justifyContent={"center"}>
          <Box 
            width={'90%'} 
           height={"185px"}
            bgcolor={"#152238"}
            style={{
                position:"relative",
                borderRadius:"10px"
            }}
          >
            <Box   style={{marginLeft:"16px" , marginTop:"10px"}}> 
           
 
  <GroupIcon  fontSize="large" color="white" bgcolor="white" style={{padding:"5px", backgroundColor:"white" , borderRadius:"180px"}} />
 
             
            </Box>
            <Typography variant={"h4" } style={{marginLeft:"19px"}} color={"white"}>96</Typography>
            <Typography style={{marginLeft:"19px", fontSize:"small" }} color={"white"}>Total Customers</Typography>

            <Wave width={"100%"}   style={{position:"absolute" , bottom: "0px" ,   borderRadius:"10px"}} />
          </Box>
        </Grid>
        
      </Grid>
    </>
  );
};

export default LandingPage;

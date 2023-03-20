import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import logo from '../LandingPage/assests/logo.jpeg'
import Image from 'mui-image';
const Header = () =>  {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    React.useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (<>
    

    
        <AppBar position='static' sx={{backgroundColor:"white !important" , paddingY:"10px", borderBox:"none"}}>
        <Container>
          <Toolbar>
            {windowWidth <= 600 && (
              <IconButton
                size="large"
                edge="start"
                color="Black"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenuToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box  sx={{ flexGrow: 1 }}>
              <Image src={logo} width='200px'/>
            </Box>
            {windowWidth > 600 && (
              <>
                <Typography variant='h6' color={"grey"} sx={{ mr: 3, fontSize:"small"}}>Homepage</Typography>
                <Typography variant='h6'color={"grey"} sx={{ mr: 3, fontSize:"small"}}>Pixel Text</Typography>
                <Typography variant='h6' color={"grey"} sx={{ mr: 3 , fontSize:"small"}}>Contact us</Typography>
              </>
            )}
            <Button  sx={{color:"white", paddingY:"2px", paddingX:"14px", backgroundColor:"Black" , borderRadius:"20px",'&:hover': {backgroundColor:"rgb(58, 58, 58)"} }}>But Pixel</Button>
          </Toolbar>
          {menuOpen && (
            <Box
              sx={{
                position: 'absolute',
                top: '64px',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                p: 2,
                boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Typography variant='h6'   sx={{ mb: 2  ,color:"grey" ,  padding:"5px", margin:"0", borderRadius:"10px",   '&:hover': {backgroundColor:"rgb(177, 177, 177)"}}}>Homepage</Typography>
              <Typography variant='h6'  sx={{ mb: 2 ,  color:"grey" ,padding:"5px", margin:"0", borderRadius:"10px",   '&:hover': {backgroundColor:"rgb(177, 177, 177)"}}}>Pixel Text</Typography>
              <Typography variant='h6'  sx={{ mb: 2 ,  color:"grey" , padding:"5px", margin:"0", borderRadius:"10px",   '&:hover': {backgroundColor:"rgb(177, 177, 177)"}}}>Contact us</Typography>
             
            </Box>
          )}
      </Container>
        </AppBar>
  
      </>
    );
  }
  
export default Header;
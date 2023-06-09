import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import navLogo from "../assets/navLogo.png"
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ borderBottom: "1px solid #E9E9E9", boxShadow: "none !important" }} color='transparent' position="static">
        <Toolbar sx={{ px: "5% !important", color: "black" }}>
        <Box>
            <img width={150} src={navLogo} alt="dinningSet" />
          </Box>
          <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "space-between", flexGrow: 2, px: "25%" }}>
            <Typography>
              Shop
            </Typography>
            <Typography>
              Collective
            </Typography>
            <Typography>
              Designers
            </Typography>
            <Typography>
              About Us
            </Typography>
            <Typography>
              Contact
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <MenuIcon />
            </IconButton>
            <IconButton sx={{borderRight:"1px solid lightgray", borderRadius:"0"}} size="large">
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

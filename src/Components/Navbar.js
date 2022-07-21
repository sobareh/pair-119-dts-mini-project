import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import LogoImage from '../assets/LogoImage.png';
const navItems = ['Indonesian', 'Pricing', 'About'];

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component='nav'
        position='fixed'
        sx={{ backgroundColor: '#141414' }}
      >
        <Toolbar>
          <Box
            component='img'
            sx={{
              height: 24,
              width: 24,
              marginRight: 15,
            }}
            alt='Logo'
            src={LogoImage}
          />
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

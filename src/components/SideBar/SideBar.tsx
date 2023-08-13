import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { SideBarListBox, StyledFormatAlignJustifyIcon, StyledLogoImg, StyledSideBarBox, StyledSideBarHeaderBox } from './SideBarStyle';
import { sideBarData } from './sidBarData';
import { Typography } from '@mui/material';
import SideBarFooter from '../SideBarFooter/SideBarFooter';


const drawerWidth = 240;

const  SideBar=()=> {
  return (
    <StyledSideBarBox >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
           <StyledSideBarHeaderBox>
        <StyledFormatAlignJustifyIcon />
            <StyledLogoImg  src='/assets/VATLogo.png' alt='logo'/>
        </StyledSideBarHeaderBox>
        <Toolbar />
        <Divider />
        <List>
          {sideBarData.map((item, index) => (
            <SideBarListBox>
            <Typography>{item.title}</Typography>
            <img src={item.icon} alt='icons'/>
            </SideBarListBox>

          ))}
        </List>
        <Divider />
      <SideBarFooter/>
      </Drawer>
    </StyledSideBarBox>
  );
}

export default SideBar;
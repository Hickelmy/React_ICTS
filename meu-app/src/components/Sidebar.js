import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  ListItemButton  from '@mui/material/ListItemButton';

//ICONES

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PolicyIcon from '@mui/icons-material/Policy';






const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
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
        anchor="left"
      >
          <Typography variant="h5"  style={{color: '#284b63'}} component="h5"  align="center">
            Modulo do sistema
        </Typography>;
         

        <Toolbar />
        
        <Divider />



        <Router> 
        <List >
          <ListItem disablePadding >
            <Link to="/Upload"> 
            <ListItemButton style={{color: 'red'}}>
              <ListItemIcon style={{color: 'red'}} >
                <DriveFolderUploadIcon />
              </ListItemIcon>
              <ListItemText  primary="Upload de Arquivos" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to="/Relatorio">
            <ListItemButton style={{color: '#284b63'}}>
              <ListItemIcon style={{color: '#284b63'}}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText  primary="Relatorio" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link to="/Politica">
            <ListItemButton style={{color: '#284b63'}}>
              <ListItemIcon style={{color: '#284b63'}}>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText  primary="Politica" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
       
        </Router>

      

      
        
        <Divider />

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        
      </Box>
    </Box>
  );
}

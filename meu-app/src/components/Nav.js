import { Link } from 'react-router-dom';

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PolicyIcon from '@mui/icons-material/Policy';


import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';




function Nav() {
  return (
    <ul >
      
      <Link to="/">
      <ListItemButton >
        <ListItemIcon>
          <DriveFolderUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Upload" to="/Relatorio" />
      </ListItemButton>
      </Link>


      <Link to="/Relatorio">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Relatorio" />
      </ListItemButton>
      </Link>


      <Link to="/Politica"> 
      <ListItemButton>
        <ListItemIcon>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText primary="Politica" />
      </ListItemButton>
      </Link>
    </ul>
  )
}

export default Nav
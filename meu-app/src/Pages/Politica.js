import Sidebar from '../components/Sidebar';
import TablePolitica from '../components/TablePolitica';

import Alert from '../components/Alert';

import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';








function Politica() {
  return (
    <div>
        
     
      <Container component="main" maxWidth="md" >
     
      <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        
        <Grid item xs={4} md={4}>
        <Sidebar/>
        </Grid>
        <Grid item xs={8} md={8}>

      
  
        <div style={{ textAlign: "center" }}>
            <h1>Politicas  </h1>
            <form className="csv-form">
      <div className="csv-form-group">
        
      <Alert/>
      <TablePolitica/>
      </div>
    </form>
  </div>
       
        
        </Grid>
      </Grid>
    </Box>
    </Container>
    </div>
  )
}

  export default Politica
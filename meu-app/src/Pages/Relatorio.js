import Sidebar from '../components/Sidebar';
import Table from '../components/Table';



import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';




function Relatorio() {
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
            <h1>Relatorios  </h1>
            <form className="csv-form">
      <div className="csv-form-group">
      <Table/>
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

  export default Relatorio
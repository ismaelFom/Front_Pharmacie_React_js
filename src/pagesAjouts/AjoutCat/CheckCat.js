import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Ajoutercat from './ajouterCat';



const CheckCat = () => {


  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography color="red" component="h1" variant="h4" align="center">
          Ajouter une categorie
          </Typography>
          <Ajoutercat/>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default CheckCat;
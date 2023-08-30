import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Ajoutercat from './ajouterCat';



export default function CheckCat() {


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

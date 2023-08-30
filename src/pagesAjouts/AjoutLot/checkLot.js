import  React from 'react';
import { Typography, Paper, Container } from '@mui/material';
import AjoutLot from './ajoutLot';
// import '../style/StyleLot.css'
  // className='div-ajouterLot'


const CheckLot = () => {


  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography color="red" component="h1" variant="h4" align="center">
          Ajouter une Lot
          </Typography>
          <AjoutLot/>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
export default CheckLot;
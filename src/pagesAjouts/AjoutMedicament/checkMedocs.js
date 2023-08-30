import * as React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import AddMedicament from './ajoutMedicament';



const CheckMedocs = () => {


  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography color="red" component="h1" variant="h4" align="center">
          Ajouter un Medicament
          </Typography>
          <AddMedicament/>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
export default CheckMedocs;
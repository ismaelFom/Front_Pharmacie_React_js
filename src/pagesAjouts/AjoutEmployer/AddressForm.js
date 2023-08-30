import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, Button, Typography } from '@mui/material';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import StyledTextarea from '@mui/material/TextareaAutosize';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            type="text" name="code" value={categories.code} onChange={handleChange}
            label="Code"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="nom"
            label="Nom"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant='standard' fullWidth>
            <InputLabel > LocAge</InputLabel>
            <Select
              required
              name='nom'
              value={categories.nom}
              label="Age"
              onChange={handleChange}
              variant='standard'
            >
              <MenuItem className="ajoutinput" name='nom' value="Médicaments oral">Médicaments oral</MenuItem>
              <MenuItem className="ajoutinput" name='nom' value="Médicaments injectable">Médicaments injectable</MenuItem>
              <MenuItem className="ajoutinput" name='nom' value="Soluté de perfusin">Soluté de perfusin</MenuItem>
              <MenuItem className="ajoutinput" name='nom' value="Vaccins/Immunoglobuline/Serum">Vaccins/Immunoglobuline/Serum</MenuItem>
              <MenuItem className="ajoutinput" name='nom' value="Désinfectant">Désinfectant</MenuItem>
              <MenuItem className="ajoutinput" name='nom' value="Anticeptique">Anticeptique</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            description
          </Typography>
          <StyledTextarea
            required
            name="description"
            label="description"
            fullWidth
            autoComplete="family-name"
            variant='standard'
            value={categories.description}
            onChange={handleChange}
            placeholder="Votre description ici"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant='standard'
            size='small'
            type="file"
            id="imageInput"
            name='photo'
            value={categories.photo} 
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <Button variant='contained' color='success' type="submit" onClick={(e) => saveData(e)}>Validation</Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

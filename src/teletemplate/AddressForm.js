import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, Button, Typography, InputAdornment } from '@mui/material';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import StyledTextarea from '@mui/material/TextareaAutosize';

export default function AddressForm() {

  const [value, setValue] = useState('')
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="code"
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
              name='option'
              variant='standard'
            // label="LocAge"
            >
              {/* <MenuItem className="ajoutinput" name='nom' value="" >--Select one--</MenuItem> */}
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
          <TextField
            required
            select
            name='nom'
            value={''}
            label="Age"
            fullWidth
            onChange={''}
            variant='outlined'
          // InputProps={{
          //   endAdornment: <InputAdornment position='end'>Fcfa</InputAdornment>,
          // }}
          >
            <MenuItem className="ajoutinput" name='nom' value="Médicaments oral">Médicaments oral</MenuItem>
            <MenuItem className="ajoutinput" name='nom' value="Médicaments injectable">Médicaments injectable</MenuItem>
            <MenuItem className="ajoutinput" name='nom' value="Soluté de perfusin">Soluté de perfusin</MenuItem>
            <MenuItem className="ajoutinput" name='nom' value="Vaccins/Immunoglobuline/Serum">Vaccins/Immunoglobuline/Serum</MenuItem>
            <MenuItem className="ajoutinput" name='nom' value="Désinfectant">Désinfectant</MenuItem>
            <MenuItem className="ajoutinput" name='nom' value="Anticeptique">Anticeptique</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name='nom'
            value={''}
            label="Le prix"
            fullWidth
            onChange={''}
            variant='standard'
            InputProps={{
              endAdornment: <InputAdornment position='end'>Fcfa</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name='nom'
            value={value}
            label="Le prix"
            fullWidth
            onChange={e => setValue(e.target.value)}
            error={!value}
            helperText={(!value) ? 'Required' : 'Ne communiquez pas vos informations personnelles'}
            variant='standard'
            InputProps={{
              endAdornment: <InputAdornment position='end'>Fcfa</InputAdornment>,
            }}
          />
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
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <Button variant='contained' color='success' type="submit" className="btnMui" >Validation</Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

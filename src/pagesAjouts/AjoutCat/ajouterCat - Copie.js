import React, { useState } from 'react';
import { catServices } from '../Zservices/cat.services';
import { Button, MenuItem, Select, TextField, Grid, } from '@mui/material';
import { FormControl, Select, MenuItem, InputLabel, Button, Typography } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';
import './StyleMui.css'

const Ajoutercat = () => {
    // const [photo, setPhoto] = useState(null);


    const [categories, setCategorie] = useState({
        nom: '',
        code: '',
        description: '',
        photo: ''
    })

    // const handleFileChange = (event) => {
    //     setPhoto(URL.createObjectURL(event.target.files[0]));
    // };

    const handleChange = (e) => {
        setCategorie({ ...categories, [e.target.name]: e.target.value });

    }

    const saveData = (e) => {
        e.preventDefault();

        // if (categories) {
        // } else {
        //     return alert('SVP ! Veuillez remplir tous les changs')
        // }
        catServices.catAdd(categories)
            .then(res => {
                console.log(res);
                alert('Enregistrement categories Réussit...', res.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })

    }

    return (

        <div className='div-ajouterCat'>
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
        </div>
    )
}
export default Ajoutercat;
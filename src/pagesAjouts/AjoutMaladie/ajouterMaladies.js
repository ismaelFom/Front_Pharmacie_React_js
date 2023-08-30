import React, { useState } from 'react';
import { malServices } from '../../Zservices/mal.services';
import '../../style/StyleLot.css'
import { Grid, TextField, Button, Typography } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';

const AjouterMaladies = () => {
    // let navigate = useNavigate();
    const [maladies, setMaladies] = useState({
        nom: '',
        description: ''
    })

    const handleChange = (e) => {
        setMaladies({ ...maladies, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();

        let maladie = JSON.stringify(maladies);
        console.log("mal:", maladie);

        malServices.malAdd(maladie)
            .then(response => {
                console.log(response);
                alert('Enregistrement du maladie Réussit...', response.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (
        <div className='div-ajouterLot'>
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            type="text"
                            name="code"
                            value={maladies.nom}
                            onChange={handleChange}
                            label="Code"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            description
                        </Typography>
                        <StyledTextarea
                            type="text"
                            required
                            name="description"
                            label="description"
                            fullWidth
                            autoComplete="family-name"
                            variant='standard'
                            value={maladies.description}
                            onChange={handleChange}
                            placeholder="Votre description ici"
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

export default AjouterMaladies;
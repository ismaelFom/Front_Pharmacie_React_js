import React, { useState } from 'react';
import '../../style/StyleLot.css'
import { Button, Typography, Grid, TextField } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';
import { pharmaServices } from '../../Zservices/pharma.service';


const AjoutPharmacie = () => {
    // let navigate = useNavigate();
    const [pharmacies, setPharmacies] = useState({
        adresse: '',
        nom: '',
        siteWeb: '',
        description: '',
        email: '',
        photo:'',
        telephone: ''
    })

    const handleChange = (e) => {
        setPharmacies({ ...pharmacies, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();

        console.log(pharmacies);

        pharmaServices.pharmaAdd(pharmacies)
            .then(res => {
                console.log(res.config.data);
                alert('Enregistrement de la pharmacies Réussit...', res.config.data)

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
                            onChange={handleChange}
                            value={pharmacies.nom}
                            name="nom"
                            type="text"
                            label="Nom"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            type="text"
                            name="adresse"
                            value={pharmacies.adresse}
                            onChange={handleChange}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            type="email"
                            name="email"
                            value={pharmacies.email}
                            onChange={handleChange}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            type="telephone"
                            name="telephone"
                            value={pharmacies.telephone}
                            onChange={handleChange}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            type="text"
                            name="siteWeb"
                            value={pharmacies.siteWeb}
                            onChange={handleChange}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
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
                            value={pharmacies.photo}
                            onChange={handleChange}
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
                            value={pharmacies.description}
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

export default AjoutPharmacie;
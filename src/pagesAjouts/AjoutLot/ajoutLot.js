import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../../style/StyleLot.css'
import { lotsServices } from '../../Zservices/lot.services';
import { Grid, TextField, Button, Typography, InputAdornment } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';


const AjoutLot = () => {
    // let navigate = useNavigate();
    const [lots, setLots] = useState({
        code: '',
        dateFabrication: '',
        datePeremtion: '',
        description: '',
        id: 1,
        prixUnitaire: '',
        quantite: '',
    })

    let dateF;
    let dateP;
    const handleChange = (e) => {
        setLots({ ...lots, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();
        // lots.dateFabrication = new Date(dateF);
        // lots.datePeremtion = new Date(dateP);
        // let lot = JSON.stringify(lots);
        console.log(lots);

        lotsServices.lotAdd(lots)
            .then(res => {
                console.log(res.config.data);
                alert('Enregistrement du lot Réussit...', res.config.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (
        <div> 
            {/* className='div-ajouterLot' */}
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            type="text"
                            name="code"
                            value={lots.code}
                            onChange={handleChange}
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
                            value={dateF}
                            name="dateFabrication"
                            type="text"
                            onChange={handleChange}
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
                            value={dateP}
                            name="datePeremtion"
                            type="text"
                            onChange={handleChange}
                            label="Code"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            type="num"
                            min={0}
                            name="quantite"
                            value={lots.quantite}
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
                            type="num"
                            min={0}
                            name="prixUnitaire"
                            value={lots.prixUnitaire}
                            onChange={handleChange}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                            InputProps={{
                              endAdornment: <InputAdornment position='end'>Fcfa</InputAdornment>,
                            }}
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
                            value={lots.photo}
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
                            value={lots.description}
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

export default AjoutLot;
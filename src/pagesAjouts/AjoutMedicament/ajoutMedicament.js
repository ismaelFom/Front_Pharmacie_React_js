import React from 'react';
import { useState } from 'react';
import { medocsServices } from '../../Zservices/medocs.services';
import { Button, Typography, Grid, TextField } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';
import '../../style/StyleMedocs.css';

const AddMedicament = () => {

    const [ajoutmedoc, setAjoutmedoc] = useState({
        lot:3,
        nom: '',
        marque: '',
        dosage: '',
        forme: '',
        description: '',
        photo:''
        // appartenances:'',
        // soins: ''
    })

    const handleChange = (e) => {
        setAjoutmedoc({ ...ajoutmedoc, [e.target.name]: e.target.value });
    }


    const saveData = (e) => {
        e.preventDefault();
        console.log('ajoutmedoc');

        
        let ajoutmedocs = JSON.stringify(ajoutmedoc);
        console.log(ajoutmedocs);


        medocsServices.getEdit(ajoutmedocs)
            .then(res => {
                console.log(res.data);
                alert('Medicaments enregistrés');
            }).catch(erreur => {
                console.log('Erreur...', erreur);
                alert("Erreur d'enregistrés de medicament");
            })
    }

    
    return (
        <div className='div-ajouterMedocs'>

<React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            onChange={handleChange}
                            value={ajoutmedoc.nom}
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
                            type="num"
                            min={0}
                            name="dosage"
                            value={ajoutmedoc.dosage}
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
                            name="forme"
                            value={ajoutmedoc.forme}
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
                            name="marque"
                            value={ajoutmedoc.marque}
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
                            value={ajoutmedoc.photo}
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
                            value={ajoutmedoc.description}
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
export default AddMedicament;
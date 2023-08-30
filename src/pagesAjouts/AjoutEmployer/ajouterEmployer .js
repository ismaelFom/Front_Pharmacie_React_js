import { React, useState } from 'react';
import { empServices } from '../../Zservices/emp.services';
import '../../style/StyleEmp.css';
import { Button, Typography, Grid, TextField } from '@mui/material';
import StyledTextarea from '@mui/material/TextareaAutosize';
// import { useNavigate } from 'react-router-dom';

const AddEmployer = () => {
    // let navigate = useNavigate();
    //  const {id} =useParams();
   

    const [employer, setEmployer] = useState({
        nom: '',
        prenom: '',
        username: '',
        adresse: '',
        telephone: '',
        pharmacie: 1,
        email: '',
        photo: '',
        description: '',
        // photo: '',
        password: ''
        // role: ''
    });

    const handleChange = (e) => {
        setEmployer({ ...employer, [e.target.name]: e.target.value });
    }



    const saveData = async (e) => {
        e.preventDefault();


        let emp = JSON.stringify(employer);
        console.log('emp:', emp);



        empServices.createEmp(emp)
            .then(res => {
                console.log('Enregistrement Réussit...', res.data)
                alert('L\'employer a été créé...');

            }).catch(erreur => {
                console.log('Erreur...', erreur);
                alert('Erreur de création d\'un employer...');
            });



    }


    return (
        <div className='div-ajouterEmp'>

            <React.Fragment>
                <from>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                onChange={handleChange}
                                value={employer.nom}
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
                                name="prenom"
                                value={employer.prenom}
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
                                name="username"
                                value={employer.username}
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
                                name="adresse"
                                value={employer.adresse}
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
                                value={employer.email}
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
                                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                                type="telephone"
                                name="telephone"
                                value={employer.telephone}
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
                                type="passeword"
                                name="passeword"
                                value={employer.siteWeb}
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
                                value={employer.photo}
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
                                value={employer.description}
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
                </from>
            </React.Fragment>
        </div>
    )
}

export default AddEmployer;
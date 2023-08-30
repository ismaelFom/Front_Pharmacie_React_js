import React, { useState } from 'react';
import { catServices } from '../Zservices/cat.services';
import { Button, MenuItem, Select, TextField, Box } from '@mui/material';
import './StyleMui.css'

const Ajoutercat = () => {
    // const [photo, setPhoto] = useState(null);


    const [categories, setCategorie] = useState({
        nom: '',
        code: '',
        description: '',
        photo: {
            title: '',
            context: '',
            file: ''
        }
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

            {/* <div className="ajouttout">
                <h4>Ajouter une categorie</h4>
            </div> */}

            <form>
                <Box
                    // display="flex"
                    // flexDirection={"row"}
                    // maxWidth={3000}
                    // maxHeight={700}
                    // alignItems="center"
                    // justifyContent={"space-around"}
                    // flexdirection={"row"}
                    // margin="auto"
                    // margin-top={0}
                    padding={2}
                    borderRadius={3} 
                    className="catMui0"
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <div className="catMui1">
                        <TextField label='Code' size='small' variant='outlined' id='texta1' className="ajoutinput" type="text" name="code" value={categories.code} onChange={handleChange} />
                        <Select
                        name='option'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories.nom}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <textarea
                            label="Description"
                            aria-label="minimum height"
                            variant='outlined'
                            minRows={3} 
                            id='texta3'
                            className="ajoutinput"
                            name='description'
                            value={categories.description}
                            onChange={handleChange}
                            placeholder="Votre description ici">
                        </textarea>
                    </div>
                    <div className="catMui2">
                        <TextField required variant='outlined' label='Code' size='small' id='texta1' className="ajoutinput" type="title" name="code" value={categories.photo.title} onChange={handleChange} />
                        <TextField required variant='outlined' label='Code' size='small' id='texta1' className="ajoutinput" type="context" name="code" value={categories.photo.context} onChange={handleChange} />
                        <TextField required variant='outlined' size='small' type="file" id="imageInput" name='photo' value={categories.photo.file} onChange={handleChange} />{categories.photo.file && <img src={categories.photo.file} alt="choisie par l'utilisateur" />}

                    </div>
                </Box>
                <div>
                    <Button variant='contained' color='success' type="submit" className="btnMui" onClick={(e) => saveData(e)}>Validation</Button>
                </div>
               
                {/* 
                            <div id='ajoutx2' className="ajoutparti">
                                <select className="ajoutinput" id='texta2' name='nom' value={categories.nom} onChange={handleChange}>
                                    <option className="ajoutinput" name='nom' value="" >--Select one--</option>
                                    <option className="ajoutinput" name='nom' value="Médicaments oral">Médicaments oral</option>
                                    <option className="ajoutinput" name='nom' value="Médicaments injectable">Médicaments injectable</option>
                                    <option className="ajoutinput" name='nom' value="Soluté de perfusin">Soluté de perfusin</option>
                                    <option className="ajoutinput" name='nom' value="Vaccins/Immunoglobuline/Serum">Vaccins/Immunoglobuline/Serum</option>
                                    <option className="ajoutinput" name='nom' value="Désinfectant">Désinfectant</option>
                                    <option className="ajoutinput" name='nom' value="Anticeptique">Anticeptique</option>
                                </select>
                            </div> */}


            </form>
        </div>
    )
}
export default Ajoutercat;
import { React, useState } from 'react';
import '../style/StyleUser.css';
import { lotsServices } from '../Zservices/lot.services';



const Supression = () => {

       // let navigate = useNavigate();
    //    const [total, setTotal] = useState('')
       const [lots, setLots] = useState({code:''})
       const [lot, setLot] = useState({
        codes: '',
        total: '',
    //   prixUnitaire: '',
      quantite: ''
    })
  
    const handleChange = (e) => {
      setLots({ ...lot, [e.target.name]: e.target.value });
    }

  
     const saveData
        = (e) => {
        e.preventDefault();
            lotsServices.getLot()
                            .then(res => {
                                console.log(res.data)
                                setLots(res.data.lots.code)})
                            .catch(erreur => {
                                            console.log('Erreur dans le code du lot', erreur);
                                        })
            // if(lot.codes === lots.code){
            //     (lot.quantite, number) = {
            //         // e.preventDefault();
            //         setLot({lot.quantite - number})
            //         console.log(lot);
            //     }
            // }
        }
    
    return (
        <div className='div-suppressionLot'>

            <div className="ajouttout">
                <h4>Réduction d'un Lot</h4>
            </div>
            <form className='container newplus'>

                <div className='newform-lots'>

                    <div id='ajoutx1' className="ajoutparti">
                        <label>Code lot :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="code" value={lots.code} onChange={handleChange} />
                    </div>

                    <div id='ajoutx2' className="ajoutparti">
                        <label>Quantité à Retirer :</label>
                        <input id='texta1' className="ajoutinput" type="number" name="quantiteD" value={lots.quantite} onChange={handleChange} />
                    </div>

                    <div id='ajoutx2' className="ajoutparti">
                        <label>Quantité restante :</label>
                        <input id='texta1' className="ajoutinput" type="number" name="total" value={lots.total} onChange={handleChange} />
                    </div>

                    {/* <div id='ajoutx2' className="ajoutparti">
                        <label>Prix Unitaire :</label>
                        <input id='texta1' className="ajoutinput" type="number" name="prixUnitaire" value={lots.prixUnitaire} onChange={handleChange}>fcfa</input>
                    </div> */}
                </div>

                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
                </div>

            </form>

        </div>
    )
}
export default Supression;
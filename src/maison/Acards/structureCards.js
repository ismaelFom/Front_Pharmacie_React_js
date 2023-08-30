import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cardstyle.css';


const AffCard = ({ data }) => {



    return (


        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.photo}
          title="categorie"
          spacing={10} 
          // sx={10}
          xs={10}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nom}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <h4>{data.description}</h4>
          </Typography>
        </CardContent>
      </Card>
    )
  }













//         <div className='card'>
//             <img alt='categorie' src={data.photo} id='img-card' />
//             <h1></h1>
            
//         </div>
//     )
// }
export default AffCard;
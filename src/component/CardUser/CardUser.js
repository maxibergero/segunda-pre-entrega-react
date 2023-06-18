import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({ char }) => {
    const {image, title, description, price} = char;
  return (
    <Card sx={{ maxWidth: 300  }}>
    <CardActionArea>
      <CardMedia
        component="img"
        
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description} {price}
        </Typography>
        <Typography >
         {char.category}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardUser
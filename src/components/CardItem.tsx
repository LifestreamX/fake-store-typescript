import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '.././index.css';
import { itemType } from '../pages/Home';

type Props = {
  item: itemType;
  handleAddItemToTheCart: (itemClickedOn: itemType) => void;
};

const CardItem: React.FC<Props> = ({ item, handleAddItemToTheCart }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component='img'
      height='140'
      image={item.image}
      alt='green iguana'
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        {item.title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {item.description}
      </Typography>
      <Typography variant='body2' color='text.secondary' className='price-text'>
        Price: {<b>${item.price}</b>}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size='small'
        variant='outlined'
        color='success'
        onClick={() => handleAddItemToTheCart(item)}
      >
        Purchase
      </Button>
    </CardActions>
  </Card>
);

export default CardItem;

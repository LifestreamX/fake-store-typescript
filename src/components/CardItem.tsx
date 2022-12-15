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
  <Card className='card'>
    <CardMedia
      component='img'
      image={item.image}
      style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      alt='green iguana'
      className='images'
    />
    <CardContent>
      <Typography
        gutterBottom
        variant='h5'
        component='div'
        className='item-title'
      >
        {item.title}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        style={{ marginBottom: 30, marginTop: 30 }}
        className='item-desc'
      >
        {item.description}
      </Typography>
      <Typography variant='body2' color='text.secondary' className='price-text'>
        Price: {<b>${item.price}</b>}
      </Typography>
    </CardContent>
    <CardActions className='button-wrapper'>
      <Button
        size='small'
        variant='outlined'
        color='success'
        onClick={() => handleAddItemToTheCart(item)}
        className='purchase-button'
      >
        Add To Cart
      </Button>
    </CardActions>
  </Card>
);

export default CardItem;

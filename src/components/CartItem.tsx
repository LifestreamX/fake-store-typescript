import { Button } from '@mui/material';
import React from 'react';
import { itemType } from '../pages/Home';

type Props = {
  item: itemType;
  handleAddItemToTheCart: (clickedItem: itemType) => void;
  handleRemoveItemFromTheCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  handleAddItemToTheCart,
  handleRemoveItemFromTheCart,
}) => {
  return (
    <main>
      <h3>{item.title}</h3>
      <div className='price-total-wrapper'>
        <p>Price: </p>
        <p>Total: </p>
      </div>
      <div className='cart-buttons'>
        <Button
          variant='contained'
          onClick={() => handleRemoveItemFromTheCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          variant='contained'
          onClick={() => handleAddItemToTheCart(item)}
        >
          +
        </Button>
      </div>
      <img src={item.image} alt={item.title} />
    </main>
  );
};

export default CartItem;

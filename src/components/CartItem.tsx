import { Button } from '@mui/material';
import React, { useEffect } from 'react';
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
    <main className='cart-item-wrapper'>
      <h3>{item.title}</h3>
      <div className='price-img-wrapper'>
        <div className='price-total-wrapper'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <img src={item.image} alt={item.title} className='cart-image' />
      </div>

      <div className='cart-buttons'>
        <Button
          variant='contained'
          onClick={() => handleRemoveItemFromTheCart(item.id)}
          className='cart-button'
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          variant='contained'
          onClick={() => handleAddItemToTheCart(item)}
          className='cart-button'
        >
          +
        </Button>
      </div>
      <hr style={{ marginTop: 50 }} />
    </main>
  );
};

export default CartItem;

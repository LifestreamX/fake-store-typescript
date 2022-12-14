import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { itemType } from '../pages/Home';
import { Button } from '@mui/material';
import TransitionsModal from '../components/Modal';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

type Props = {
  itemsInCart: itemType[];
  handleAddItemToTheCart: (clickedItem: itemType) => void;
  handleRemoveItemFromTheCart: (id: number) => void;
  handleClearShoppingCart: (arg0: any) => void;
  setIsCartOpen: (arg0: boolean) => void;
};

const Cart: React.FC<Props> = ({
  itemsInCart,
  handleAddItemToTheCart,
  handleRemoveItemFromTheCart,
  handleClearShoppingCart,
  setIsCartOpen,
}) => {
  // Calculate the total cost of items in cart
  const total = (items: itemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <main className='cart-wrapper'>
      <div className='title-close-cart-wrapper '>
        <h1 className='shopping-cart-title'>My Shopping Cart</h1>
        <RemoveShoppingCartIcon
          className='cart-close-icon'
          onClick={() => setIsCartOpen(false)}
        />
      </div>

      {itemsInCart.length === 0 && <h2>Your Shopping Cart Is Empty</h2>}

      {itemsInCart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleAddItemToTheCart={handleAddItemToTheCart}
          handleRemoveItemFromTheCart={handleRemoveItemFromTheCart}
        />
      ))}
      <h2>Total: ${total(itemsInCart).toFixed(2)}</h2>
      <div className='clear-cart-button'>
        <TransitionsModal handleClearShoppingCart={handleClearShoppingCart} />
      </div>
    </main>
  );
};

export default Cart;

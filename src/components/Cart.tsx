import React from 'react';
import CartItem from './CartItem';
import { itemType } from '../pages/Home';

type Props = {
  itemsInCart: itemType[];
  handleAddItemToTheCart: (clickedItem: itemType) => void;
  handleRemoveItemFromTheCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({
  itemsInCart,
  handleAddItemToTheCart,
  handleRemoveItemFromTheCart,
}) => {
  return (
    <main className='cart-wrapper'>
      <h1>My Shopping Cart</h1>

      {itemsInCart.length === 0 && <h2>Your Shopping Cart Is Empty</h2>}

      {itemsInCart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleAddItemToTheCart={handleAddItemToTheCart}
          handleRemoveItemFromTheCart={handleRemoveItemFromTheCart}
        />
      ))}
    </main>
  );
};

export default Cart;

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import { Badge, Drawer, Grid, LinearProgress } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../components/Cart';

// Types
export type itemType = {
  id: number;
  Category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const url = 'https://fakestoreapi.com/products';

// Grabbing the products from the fake store api
const getProducts = async (): Promise<itemType[]> =>
  await (await fetch(url)).json();

const Home = () => {
  const cartData: any = window.localStorage.getItem('cart-info');

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([] as itemType[]);
  const { data, isLoading } = useQuery<itemType[]>(['products'], getProducts);

  useEffect(() => {
    setItemsInCart(JSON.parse(cartData));
  }, []);

  // Local Storage setter
  useEffect(() => {
    window.localStorage.setItem('cart-info', JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  // Adding a item to the cart
  const handleAddItemToTheCart = (clickedItem: itemType) => {
    setItemsInCart((items) => {
      // Logic for if the item is already in the cart
      const itemIsInCartAlready = items.find(
        (item) => item.id === clickedItem.id
      );

      if (itemIsInCartAlready) {
        return items.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // Logic for if the its first time the item is being added to cart
      return [...items, { ...clickedItem, amount: 1 }];
    });
  };

  // Modal clear shopping cart
  const handleClearShoppingCart = () => {
    setItemsInCart([]);
  };

  // Removing a item from the cart
  const handleRemoveItemFromTheCart = (id: number) => {
    setItemsInCart((items) =>
      items.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as itemType[])
    );
  };

  // Iterate through all the items in the cart and add up the amount
  const getItemCount = (items: itemType[]) => {
    return items.reduce((acc: number, item) => acc + item.amount, 0);
  };

  console.log(data)

  return (
    <main>
      {/* Shopping Cart Icon */}
      <Badge
        badgeContent={getItemCount(itemsInCart)}
        color='primary'
        className='shopping-cart'
      >
        <ShoppingCartIcon
          style={{ color: 'white', fontSize: 50, cursor: 'pointer' }}
          onClick={() => setIsCartOpen(true)}
          className='shopping-cart-icon'
        />
      </Badge>

      {/* Shopping Cart Drawer */}
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          itemsInCart={itemsInCart}
          handleAddItemToTheCart={handleAddItemToTheCart}
          handleRemoveItemFromTheCart={handleRemoveItemFromTheCart}
          handleClearShoppingCart={handleClearShoppingCart}
          setIsCartOpen={setIsCartOpen}
        />
      </Drawer>

      {/* Items for sale */}
      <Grid container columns={8} spacing={10}>
        {isLoading ? (
          <>
            {/* Loading Spinner  */}
            <div className='loading-wrapper'>
              <LinearProgress color='success' className='spinner' />
            </div>
          </>
        ) : (
          <>
            {/* Fetched Data from api */}
            {data?.map((item) => (
              <Grid item key={item.id} xs={12} sm={12} md={4} height='100'>
                <CardItem
                  item={item}
                  handleAddItemToTheCart={handleAddItemToTheCart}
                />
                <h1> </h1>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </main>
  );
};

export default Home;

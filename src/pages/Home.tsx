import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import { getProducts } from './api/storeApi';
import CardItem from '../components/CardItem';
import { Grid } from '@mui/material';

// Imports from Material UI

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
const getProducts = async (): Promise<itemType[]> => await (await fetch(url)).json();


const handleAddItemToTheCart = (itemClickedOn: itemType) => {};

const Home = () => {
  const { data, isLoading, error } = useQuery<itemType[]>(
    ['products'],
    getProducts
  );

  console.log(data);

  return (
    <div>
      <Grid container columns={12} spacing={5}>
        
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4} >
            <CardItem
              item={item}
              handleAddItemToTheCart={handleAddItemToTheCart}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

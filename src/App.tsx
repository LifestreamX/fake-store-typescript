import { Category, Home } from '@mui/icons-material';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import { getProducts } from './api/storeApi';
import axios from 'axios';

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

const url = '/products/getAllProducts';

// Grabbing the products from the fake store ap
const getProducts = async (): Promise<itemType[]> => await axios.get(url);

function App() {
  const { data, isLoading, error } = useQuery<itemType[]>(
    ['products'],
    getProducts
  );

  console.log(data);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;

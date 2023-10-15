import React, { useEffect } from 'react';
import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router';
import { store } from './store/store';
import { Provider, useDispatch } from 'react-redux'
import { fetchServices } from './store/thunks/fetchServices';
import { fetchDepartments } from './store/thunks/fetchDepartments';
import { genrateAndStoreUID } from './utils/generateUID';

function App() {

  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

const Content: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      genrateAndStoreUID();
      //@ts-ignore
      dispatch(fetchDepartments())
      //@ts-ignore
      dispatch(fetchServices())
  }, [dispatch]);
  
  return (
    <RouterProvider router={router} />
  )
}
export default App;

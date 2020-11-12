import React from 'react';

import Navigation from './src/navigation/Navigation';
import firebaseConfig from './src/firebase/firebaseConfig';

import useDataContext, { DataContext } from './src/contexts/DataContext';


const App = () => {

  const dataContext = useDataContext()

  return (
    <DataContext.Provider value={dataContext}>
      <Navigation />
    </DataContext.Provider>
      
  );
};


export default App;
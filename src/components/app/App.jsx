import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import DATA from '../../utils/data';

function App() {

  return (
    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        <BurgerIngredients data={DATA} />
        <BurgerConstructor data={DATA} />
      </main>
    </div>
  );
}

export default App;

import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import DATA from '../../utils/data';

class App extends React.Component {
  constructor() {
    super();
    this.state = { DATA };
  }


  render() {

    return (
      <div className='wrapper'>
        <AppHeader />
        <main className='main container'>
          <BurgerIngredients data={DATA} />
          <BurgerConstructor />
        </main>
      </div>
    );
  }
}

export default App;

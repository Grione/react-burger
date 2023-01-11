import { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

const URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState({ data: [], isLoading: true, hasError: false });
  const [modalState, setModalState] = useState({ isOpen: false, typeModal: null, data: {} });

  useEffect(() => {
    const getIngredientData = async () => {
      setState({ ...state, hasError: false, isLoading: true });

      try {
        const response = await fetch(URL);
        const data = await response.json();

        setState({ ...state, data: data.data, isLoading: false });
      } catch (error) {
        setState({ ...state, hasError: true, isLoading: false })
      }
    }

    getIngredientData();

  }, []);

  function openModal(type, data) {
    setModalState({ ...modalState, isOpen: true, typeModal: type, data: data })
  }

  function closeModal() {
    setModalState({ ...modalState, isOpen: false })
  }

  const { data, isLoading, hasError } = state;

  return (
    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        {isLoading && 'Loading...'}
        {hasError && 'Erron defined'}
        {
          !isLoading && !hasError && (
            <>
              <BurgerIngredients data={data} openModal={openModal} />
              <BurgerConstructor data={data} openModal={openModal} />
            </>
          )

        }
      </main>
      {modalState.isOpen &&
        <Modal title={modalState.typeModal === 'ingredient' ? 'Детали ингредиента' : ''} show={modalState.isOpen} close={closeModal}>
          {modalState.typeModal === 'ingredient' && (
            <IngredientDetails data={modalState.data} />
          )}
          {modalState.typeModal === 'order' &&
            <OrderDetails id={modalState.data.id} />
          }
        </Modal>
      }
    </div>
  );
}

export default App;

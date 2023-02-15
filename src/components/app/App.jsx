import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { getUser } from "../../services/actions/auth-actions";
import AppHeader from '../app-header/app-header';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  IngredientPage,
  NotFound404
} from '../../pages/';
import { ProtectedRouteElement } from "../protected-route-element/proptected-route-element";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../services/actions/ingredients-actions";


function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getUser())
    dispatch(getIngredients())
  }, [dispatch])

  return (

    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
            <Route path="orders" element={<p>Orders</p>} />
          </Route>
          <Route path="/ingredient/:id" element={<IngredientPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        {
          background && (
            <Routes>
              <Route
                path="/ingredient/:id"
                element={<Modal title="Детали ингредиента">
                  <IngredientDetails />
                </Modal>} />
            </Routes>
          )
        }
      </main>
    </div>

  );
}

export default App;

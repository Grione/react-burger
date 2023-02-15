import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])


  return (
    <BrowserRouter>
      <div className='wrapper'>
        <AppHeader />
        <main className='main container'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>              <Route path="orders" element={<p>Orders</p>} />
            </Route>
            <Route path="/ingredient" element={<IngredientPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

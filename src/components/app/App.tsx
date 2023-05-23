import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { getUser } from "../../services/actions/auth-actions";
import AppHeader from '../app-header/app-header';
import ProfileForm from '../profile/profile-form';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  IngredientPage,
  FeedPage,
  OrderDetailPage,
  NotFound404,
} from '../../pages';
import { ProtectedRouteElement } from "../protected-route-element/proptected-route-element";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../services/actions/ingredients-actions";
import { OrdersHistory } from "../orders-history/orders-history";


const App: FC = () => {

  const dispatch = useDispatch<any>();
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
          <Route path="/login" element={<ProtectedRouteElement
            anonym={true}
            element={<LoginPage />} />} />
          <Route path="/register" element={<ProtectedRouteElement
            anonym={true}
            element={<RegisterPage />} />} />
          <Route path="/forgot-password"
            element={<ProtectedRouteElement
              anonym={true}
              element={<ForgotPassword />} />} />
          <Route path="/reset-password"
            element={<ProtectedRouteElement
              anonym={true}
              element={<ResetPassword />} />} />
          <Route path="/profile"
            element={<ProtectedRouteElement element={<ProfilePage />} />}>
            <Route path="" element={<ProfileForm />} />
            <Route path="orders" element={<OrdersHistory />} />
          </Route>
          <Route path="/profile/orders/:id"
            element={<ProtectedRouteElement element={<OrderDetailPage />} />}>
          </Route>
          <Route path="/ingredient/:id" element={<IngredientPage />} />
          <Route path="/feed" element={<FeedPage />} />

          <Route path="/feed/:id" element={<OrderDetailPage />} />
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
              <Route path="/profile/orders/:id" element={<Modal title=""><OrderDetailPage /></Modal>} />
              <Route path="/feed/:id" element={<Modal title=""><OrderDetailPage /></Modal>} />
            </Routes>
          )
        }
      </main>
    </div>

  );
}

export default App;

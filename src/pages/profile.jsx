
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './profile.module.css';
import ProfileForm from '../components/profile/profile-form';
import { logOut } from '../services/actions/auth-actions';

export function ProfilePage() {

  const activeClasses = `text text_type_main-medium ${styles.link}`;
  const inactiveClasses = `text_color_inactive text text_type_main-medium ${styles.link}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logOut(() => {
      navigate('/login');
    }));

  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <ul className='mb-20'>
            <li>
              <NavLink
                to="/profile" end
                className={({ isActive }) => isActive ? activeClasses : inactiveClasses}>
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/orders"
                className={({ isActive }) => isActive ? activeClasses : inactiveClasses}>
                История Заказов</NavLink>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className={`text_color_inactive text text_type_main-medium ${styles.link}`}
              >
                Выход
              </button>
            </li>
          </ul>
          <p className='text_type_main-small text_color_inactive'>В этом разделе вы можете <br />
            изменить свои персональные данные</p>
        </div>
        <div>
          <ProfileForm />
          <Outlet />
        </div>
      </div>
    </>
  )
}
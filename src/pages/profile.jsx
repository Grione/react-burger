
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './profile.module.css';
import ProfileForm from '../components/profile/profile-form';

export function ProfilePage() {

  const activeClasses = `text text_type_main-medium ${styles.link}`;
  const inactiveClasses = `text_color_inactive text text_type_main-medium ${styles.link}`;


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
            <li><Link to="/" className={`text_color_inactive text text_type_main-medium ${styles.link}`}>Выход</Link></li>
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
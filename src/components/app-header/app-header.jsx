import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';
import { Link, NavLink, useMatch } from 'react-router-dom';

function AppHeader() {
  const inActiveClass = `${headerStyles['header-link']} p-4 text text_type_main-default text_color_inactive`;
  const activeClass = `${headerStyles['header-link']} p-4 text text_type_main-default`;

  return (
    <header className={`${headerStyles.header} p-4`}>
      <div className={`container ${headerStyles.container}`}>
        <nav className={headerStyles.navigation}>
          <ul>
            <li>
              <NavLink to='/'
                className={({ isActive }) => isActive ? activeClass : inActiveClass}
              >
                <BurgerIcon type={useMatch('/') ? 'primary' : 'secondary' }/>
                <span>Конструктор</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/history' className={({ isActive }) => isActive ? activeClass : inActiveClass} >
                <ListIcon type={useMatch('/history') ? 'primary' : 'secondary' } />
                <span>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/" className={headerStyles['header-logo']}>
          <Logo />
        </Link>
        <NavLink to="/profile" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
          <ProfileIcon type={useMatch('/profile/*') ? 'primary' : 'secondary' } />
          <span>Личный кабинет</span>
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;
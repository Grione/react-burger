import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <header className={`${headerStyles.header} p-4`}>
      <div className={`container ${headerStyles.container}`}>
        <nav className={headerStyles.navigation}>
          <ul>
            <li>
              <Link to='/' className={`${headerStyles['header-link']} p-4 text text_type_main-default`}>
                <BurgerIcon />
                <span>Конструктор</span>
              </Link>
            </li>
            <li>
              <Link to='/history' className={`${headerStyles['header-link']} p-4 text text_type_main-default text_color_inactive`} >
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className={headerStyles['header-logo']}>
          <Logo />
        </Link>
        <Link to="/profile" className={`${headerStyles['header-link']} p-4 text text_type_main-default text_color_inactive`}>
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </Link>
      </div>
    </header>
  )
}

export default AppHeader;
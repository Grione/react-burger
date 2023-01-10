import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${headerStyles.header} p-4`}>
      <div className={`container ${headerStyles.container}`}>
        <nav className={headerStyles.navigation}>
          <ul>
            <li>
              <a href='/' className={`${headerStyles['header-link']} p-4 text text_type_main-default`}>
                <BurgerIcon />
                <span>Конструктор</span>
              </a>
            </li>
            <li>
              <a href='/' className={`${headerStyles['header-link']} p-4 text text_type_main-default text_color_inactive`} >
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>
        <a href="/" className={headerStyles['header-logo']}>
          <Logo />
        </a>
        <a href="/" className={`${headerStyles['header-link']} p-4 text text_type_main-default text_color_inactive`}>
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </a>
      </div>
    </header>
  )
}

export default AppHeader;
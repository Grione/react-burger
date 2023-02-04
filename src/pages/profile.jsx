import { Link } from 'react-router-dom';
import styles from './profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export function ProfilePage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <ul className='mb-20'>
            <li><Link to="/profile" className={`text text_type_main-medium ${styles.link}`}>Профиль</Link></li>
            <li><Link to="/" className={`text_color_inactive text text_type_main-medium ${styles.link}`}>История Заказов</Link></li>
            <li><Link to="/" className={`text_color_inactive text text_type_main-medium ${styles.link}`}>Выход</Link></li>
          </ul>
          <p className='text_type_main-small text_color_inactive'>В этом разделе вы можете <br />
            изменить свои персональные данные</p>
        </div>
        <div className={styles.inputs}>
          <Input placeholder={'Имя'} type={'text'} icon={'EditIcon'} disabled />
          <Input placeholder={'Логин'} type={'email'} icon={'EditIcon'} disabled />
          <Input placeholder={'Пароль'} type={'password'} icon={'EditIcon'} disabled />
        </div>
      </div>
    </>
  )
}
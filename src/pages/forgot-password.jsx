import { useState } from 'react';
import styles from './login.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Восстановление пароля</div>
          <div className="form">
            <div className='mb-6'>
              <EmailInput
                onChange={onChangeEmail}
                value={email}
                placeholder='Укажите Email'
              />
            </div>
            <div className='mb-20' style={{ textAlign: "center" }}>
              <Button htmlType="submit">Восстановить</Button>
            </div>
          </div>
          <div className="actions">
            <div style={{ textAlign: 'center' }}>
              <span className='text_color_inactive text text_type_main-default mr-1'>Вспомнили пароль?</span>
              <Link to="/login" className='text text_type_main-default text_color_accent'>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
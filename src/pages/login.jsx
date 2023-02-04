import { useState } from 'react';
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('')
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }
  const [password, setPassword] = useState('')
  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Вход</div>
          <div className="form">
            <div className='mb-6'>
              <EmailInput
                onChange={onChangeEmail}
                value={email}
              />
            </div>
            <div className='mb-6'>
              <PasswordInput
                onChange={onChangePassword}
                value={password}
              />
            </div>
            <div className='mb-20' style={{ textAlign: "center" }}>
              <Button htmlType="submit">Войти</Button>
            </div>
          </div>
          <div className="actions">
            <div className="mb-4" style={{ textAlign: 'center' }}>
              <span
                className='text_color_inactive
               text text_type_main-default 
               mr-1'>Вы — новый пользователь?</span>
              <Link
                to="/register"
                className='text text_type_main-default text_color_accent'>
                Зарегистрироваться
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className='text_color_inactive text text_type_main-default mr-1'>Забыли пароль?</span>
              <Link
                to="/forgot-password"
                className='text text_type_main-default text_color_accent'>
                Восстановить пароль
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
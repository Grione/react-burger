import { useState } from 'react';
import styles from './login.module.css';
import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom';

export function ResetPassword() {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeCode = e => {
    setCode(e.target.value)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Восстановление пароля</div>
          <div className="form">
            <div className='mb-6'>
              <PasswordInput
                onChange={onChangePassword}
                value={password}
                placeholder='Введите новый пароль'
              />
            </div>
            <div className='mb-6'>
              <Input
                type='text'
                onChange={onChangeCode}
                value={code}
                placeholder='Введите код из письма'
              />
            </div>
            <div className='mb-20' style={{ textAlign: "center" }}>
              <Button htmlType="submit">Сохранить</Button>
            </div>
          </div>
          <div className="actions">
            <div style={{ textAlign: 'center' }}>
              <span className='text_color_inactive text text_type_main-default mr-1'>Вспомнили пароль?</span>
              <Link
                to="/login"
                className='text text_type_main-default text_color_accent'>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
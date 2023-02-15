import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './login.module.css';
import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate, useLocation } from 'react-router-dom';
import { resetPassword } from '../utils/burger-api';

export function ResetPassword() {
  const { isAuthenticated } = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const { state } = useLocation();

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeCode = e => {
    setCode(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await resetPassword(password, code).then((resp) => {
      if (resp.success) {
        setError(false)
      }
    }, () => {
      setError(true)
    });
  }

  if (isAuthenticated || !state) {
    return (
      <Navigate
        to={'/'}
      />
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Восстановление пароля</div>
          <form onSubmit={submitHandler}>
            <div className='mb-6'>
              <PasswordInput
                onChange={onChangePassword}
                value={password}
                placeholder='Введите новый пароль'
                required={true}
              />
            </div>
            <div className='mb-6'>
              <Input
                type='text'
                onChange={onChangeCode}
                value={code}
                placeholder='Введите код из письма'
                required={true}
              />
            </div>
            <div className='mb-20' style={{ textAlign: "center" }}>
              <Button htmlType="submit" >Сохранить</Button>
            </div>
            {error && <div className="mt-2">Произошла ошибка</div>}
          </form>
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
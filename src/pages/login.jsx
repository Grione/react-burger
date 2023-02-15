import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/actions/auth-actions';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated, isLoading, isError } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ "email": email, "password": password }, () => {
      navigate('/', { replace: true });
    }));
  }

  if (isAuthenticated) {
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
          <div className="title text text_type_main-medium mb-6">Вход</div>
          <form onSubmit={onSubmitHandler} className='mb-20'>
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
            <div style={{ textAlign: "center" }}>
              <Button htmlType="submit" disabled={isLoading} >Войти</Button>
            </div>
            {isError && <div style={{ textAlign: "center" }} className="mt-4 mb-4 text text_type_main-default text_color_inactive">Произошла ошибка</div>}
          </form>


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
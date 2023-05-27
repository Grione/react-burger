import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../services/hooks';
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/actions/auth-actions';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ "email": email, "password": password }, () => {
      navigate('/', { replace: true });
    }));
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
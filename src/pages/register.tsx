import { useState } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom';
import { registerUser } from '../services/actions/auth-actions';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(
      {
        "email": email,
        "password": password,
        "name": name
      }, () => {
        navigate('/')
      }))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Регистрация</div>
          <form onSubmit={submitHandler}>
            <div className='mb-6'>
              <Input
                type='text'
                placeholder='Имя'
                onChange={onChangeName}
                value={name}
              />
            </div>
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
            <div className={`mb-20 ${styles.title}`}>
              <Button htmlType="submit" disabled={isLoading}>Зарегистрироваться</Button>
            </div>
          </form>
          <div className="actions">
            <div className={styles.title}>
              <span className='text_color_inactive text text_type_main-default mr-1'>Уже зарегистрированы?</span>
              <Link to="/login" className='text text_type_main-default text_color_accent'>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
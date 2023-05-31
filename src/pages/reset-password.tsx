import { useState } from 'react';
import styles from './login.module.css';
import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom';
import { resetPassword } from '../utils/burger-api';

export function ResetPassword() {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await resetPassword(password, code).then((resp: any) => {
      if (resp.success) {
        setError(false);
        navigate('/login');
      }
    }, () => {
      setError(true)
    });
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
            <div className={`mb-20 ${styles.title}`}>
              <Button htmlType="submit" >Сохранить</Button>
            </div>
            {error && <div className="mt-2">Произошла ошибка</div>}
          </form>
          <div className="actions">
            <div className={styles.title}>
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
import { useState } from 'react';
import styles from './login.module.css';
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="title text text_type_main-medium mb-6">Вход</div>
          <div className="form">
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
            <div className='mb-20' style={{ textAlign: "center" }}>
              <Button htmlType="submit">Зарегистрироваться</Button>
            </div>
          </div>
          <div className="actions">
            <div style={{ textAlign: 'center' }}>
              <span className='text_color_inactive text text_type_main-default mr-1'>Уже зарегистрированы?</span>
              <a href="#" className='text text_type_main-default text_color_accent'>Войти</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
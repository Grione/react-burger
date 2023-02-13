import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUser, changeUser } from '../../services/actions/auth-actions';
import styles from './profile-form.module.css';

export default function ProfileForm() {

  const { user } = useSelector(state => state.user);

  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, []);

  const rejectForm = () => {
    setName("");
    setPassword("");
    setLogin("");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const form = {
      "email": login,
      "name": name,
    }
    if (password) {
      form.password = password;
    }
    dispatch(changeUser(form));

  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <ul>
          <li className='mb-6'>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={'Имя'}
              type={'text'}
              icon={'EditIcon'}
              autoComplete='off'
            />
          </li>
          <li className='mb-6'>
            <Input
              value={login}
              onChange={e => setLogin(e.target.value)}
              placeholder={'Логин'}
              type={'email'}
              icon={'EditIcon'}
              autoComplete='off'
            />
          </li>
          <li className='mb-6'>
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={'Пароль'}
              type={'password'}
              icon={'EditIcon'}
              autoComplete='off'
            />
          </li>
        </ul>

        <div className={`mt-2 ${styles.bottom}`}>
          <button onClick={rejectForm} type="button" className={`${styles.reject} text text_type_main-default text_color_inactive`}>Отмена</button>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </div>
      </form>
    </>
  )
}
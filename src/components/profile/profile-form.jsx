import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { changeUser } from '../../services/actions/auth-actions';
import styles from './profile-form.module.css';

export default function ProfileForm() {

  const { user } = useSelector(state => state.user);

  const [formValue, setFormValue] = useState({ name: "", email: "", password: "", });

  const dispatch = useDispatch();

  useEffect(() => {
    setFormValue({ name: user.name, email: user.email, password: "", })
  }, [user])

  const rejectForm = () => {
    setFormValue({ name: user.name, email: user.email, password: "", })
  }

  const handleInputChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeUser(formValue));

  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <ul>
          <li className='mb-6'>
            <Input
              value={formValue.name}
              onChange={handleInputChange}
              placeholder={'Имя'}
              type={'text'}
              icon={'EditIcon'}
              autoComplete='off'
              name='name'
            />
          </li>
          <li className='mb-6'>
            <Input
              value={formValue.email}
              onChange={handleInputChange}
              placeholder={'Логин'}
              type={'email'}
              icon={'EditIcon'}
              autoComplete='off'
              name='email'
            />
          </li>
          <li className='mb-6'>
            <Input
              value={formValue.password}
              onChange={handleInputChange}
              placeholder={'Пароль'}
              type={'password'}
              icon={'EditIcon'}
              autoComplete='off'
              name='password'
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
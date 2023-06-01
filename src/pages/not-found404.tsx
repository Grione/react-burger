import { Link } from "react-router-dom";
import styles from './404.module.css';

export function NotFound404() {
  return (
    <>
      <div className={styles.container}>
        <h1 className="text text_type_main-large">Эта страница не найдена</h1>
        <h2 className="text text_type_main-medium">Ошибка 404</h2>
        <Link to="/" className="text text_type_main-small text_color_inactive">Перейти на главную</Link>
      </div>

    </>
  )
}
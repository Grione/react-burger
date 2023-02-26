import { Link } from "react-router-dom"

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  paddingTop: '120px'
}
export function NotFound404() {
  return (
    <>
      <div style={styles}>
        <h1 className="text text_type_main-large">Эта страница не найдена</h1>
        <h2 className="text text_type_main-medium">Ошибка 404</h2>
        <Link to="/" className="text text_type_main-small text_color_inactive">Перейти на главную</Link>
      </div>

    </>
  )
}
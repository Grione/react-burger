import { useSelector } from "../services/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';


export function HomePage() {
  const { isLoading, hasError, ingredients } = useSelector((state) => state.ingredients);

  return (
    <>
      {isLoading && 'Loading...'}
      {hasError && 'Erron defined'}
      {
        !isLoading && !hasError && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor />
          </DndProvider>
        )
      }
    </>
  )
}
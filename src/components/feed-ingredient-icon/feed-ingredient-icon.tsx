import { FC } from 'react';
import Styles from './ingredient-icon.module.css';

interface IngredientIconProps {
  srcSet: string;
  src: string;
  alt?: string;
  overflow?: number;
  extraClass?: string;
  zIndex?: number;
}

export const FeedIngredientIcon: FC<IngredientIconProps> = (
  {
    srcSet,
    src,
    alt = "ingredient",
    overflow = 0,
    extraClass,
    zIndex
  }
) => {

  return (
    <div className={[Styles.container, extraClass].join(' ')}>
      {zIndex!==undefined && zIndex < 5 && (
        <div>
          <picture className={Styles.picture}>
            <source srcSet={srcSet} />
            <img src={src} alt={alt} width="112" height="56" />
          </picture>
        </div>
      )}
      {zIndex!==undefined && zIndex >= 5 && (
        <div>
          <picture className={Styles.picture}>
            <source srcSet={srcSet} />
            <img src={src} alt={alt} width="112" height="56" />
          </picture>
          <div
            className={[Styles.container, Styles.picture, Styles.overflow].join(' ')}
          >
            <div className={Styles.picture}>
              +{overflow - zIndex}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
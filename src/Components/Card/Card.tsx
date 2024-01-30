import { CatProps } from "../../types/Cat";
import { useFavourite } from "../../Hooks/useFavourite";
import favorite from "../../Assets/Icons/favorite.svg";
import hover from "../../Assets/Icons/hover.svg";
import hovered from "../../Assets/Icons/hovered.svg";
import "./Card.scss";

export const Card: React.FC<CatProps> = (props) => {
  const { addFavourite, delFavourite, isFavorite } = useFavourite();

  const onCardClick = (e: React.MouseEvent<HTMLElement>) => {
    isFavorite(props) ? delFavourite(props) : addFavourite(props);
  };

  return (
    <div style={{ backgroundImage: `url(${props.url})` }} className="card">
      {isFavorite(props) ? (
        <img
          onClick={onCardClick}
          src={favorite}
          className="card__favorite"
          alt=""
        />
      ) : (
        <div className="hover-block">
          <img
            onClick={onCardClick}
            src={hover}
            className="card__hover"
            alt=""
          />
          <img
            onClick={onCardClick}
            src={hovered}
            className="card__hovered"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

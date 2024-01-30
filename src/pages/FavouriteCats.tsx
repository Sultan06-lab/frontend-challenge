import { useEffect } from "react";
import { Board } from "../Components/Board/Board";
import { Card } from "../Components/Card/Card";
import { Header } from "../Components/Header/Header";
import { useFavourite } from "../Hooks/useFavourite";

export const FavouriteCats: React.FC = () => {
  const { favourite } = useFavourite();

  return (
    <div>
      <Header />
      <Board>
        {favourite.map((cat) => (
          <Card {...cat} key={cat.id} />
        ))}
      </Board>
    </div>
  );
};

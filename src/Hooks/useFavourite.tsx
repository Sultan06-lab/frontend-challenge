import { useEffect, useState } from "react";
import { CatProps } from "../types/Cat";

export const useFavourite = () => {
  const [favourite, setFavourites] = useState<CatProps[]>([]);

  const addFavourite = (cat: CatProps) => {
    const allcats = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedCats = [...allcats, cat];
    localStorage.setItem("favourites", JSON.stringify(updatedCats));
    setFavourites([...updatedCats]);
  };

  const isFavorite = (cat: CatProps) => {
    const cats = JSON.parse(localStorage.getItem("favourites") || "[]");
    return cats.find((item: CatProps) => item.id === cat.id);
  };

  const delFavourite = (cat: CatProps) => {
    const allcats = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedCats = allcats.filter((item: CatProps) => item.id !== cat.id);
    setFavourites([...updatedCats]);
    localStorage.setItem("favourites", JSON.stringify(updatedCats));
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    setFavourites([...favourites]);
  });

  return { favourite, addFavourite, delFavourite, isFavorite };
};

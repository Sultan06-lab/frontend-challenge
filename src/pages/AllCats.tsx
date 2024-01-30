import { useEffect, useState } from "react";
import { Header } from "../Components/Header/Header";
import { CatProps } from "../types/Cat";
import { Card } from "../Components/Card/Card";
import { Board } from "../Components/Board/Board";
import CatsService from "../http/CatsService";
import InfiniteScroll from "react-infinite-scroll-component";

export const AllCats: React.FC = () => {
  const [cats, setCats] = useState<CatProps[]>([]);

  const fetchCats = async () => {
    const response: CatProps[] = await CatsService.getCats();
    setCats((prev) => [...prev, ...response]);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <InfiniteScroll
          dataLength={cats?.length}
          next={fetchCats}
          hasMore={true}
          style={{
            width: "100%",
            textAlign: "center",
          }}
          loader={<h4>... загружаем еще котиков ...</h4>}
        >
          <Board>
            {cats?.map((cat) => (
              <Card {...cat} key={cat.id} />
            ))}
          </Board>
        </InfiniteScroll>
      </div>
    </div>
  );
};

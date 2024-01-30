import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AllCats } from "./pages/AllCats";
import { FavouriteCats } from "./pages/FavouriteCats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/all" element={<AllCats />}></Route>
        <Route path="/" element={<AllCats />}></Route>
        <Route path="/favourite" element={<FavouriteCats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

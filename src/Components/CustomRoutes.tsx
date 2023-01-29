import { Routes, Route } from "react-router-dom";
import MoviesContainer from "./MoviesContainer";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MoviesContainer />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;

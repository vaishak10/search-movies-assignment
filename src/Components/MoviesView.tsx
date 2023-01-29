import React, { useState, useEffect, useRef, Suspense } from "react";
import { data } from "../data";
import useMediaQuery from "@mui/material/useMediaQuery";

const MovieCard = React.lazy(() => import("./MovieCard"));

const emptyStateStyle = {
  fontSize: "21px",
  fontWeight: "600",
  color: "#fff",
  marginLeft: "26px",
  paddingTop: "20px"
};

const gridLayoutStyles = {
  container: (isRowBased: any) => ({
    display: "grid",
    gridTemplateColumns: isRowBased ? "repeat(5, 1fr)" : "repeat(3, 1fr)",
    gap: "24px",
    padding: "24px 36px",
    overflowX: "auto"
  })
};
function MoviesView({ searchText }: { searchText: string }) {
  const [movies, setMovies] = useState(data);
  const [checkedMovie, setCheckedMovie] = useState([]);
  const isRowBased = useMediaQuery("(min-width: 768px)");
  console.log(isRowBased);
  const interval: any = useRef(0);

  useEffect(() => {
    interval.current = setTimeout(() => {
      const regex = new RegExp(searchText, "gi");
      const filteredMovies = data.filter(
        (movie: any) => movie.Title.match(regex) !== null
      );
      setMovies(filteredMovies);
    }, 500);

    return () => clearInterval(interval.current);
  }, [searchText]);

  return movies.length > 0 ? (
    <Suspense fallback={<p style={emptyStateStyle}>Loading...</p>}>
      <div style={gridLayoutStyles.container(isRowBased)}>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            setCheckedMovie={setCheckedMovie}
            checkedMovie={checkedMovie}
          />
        ))}
      </div>
    </Suspense>
  ) : (
    <p style={emptyStateStyle}>No results found for your search.</p>
  );
}

export default MoviesView;

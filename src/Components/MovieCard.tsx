import { useState } from "react";
import Container from "@mui/material/Container";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieCard = ({ movie }: { movie: any }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MovieDetailsCard movie={movie} active={active} />
      <Container
        sx={{
          color: "#D4D7DD",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "16px",
          justifyContent: "center",
          width: "178px",
          background: "#394B61",
          borderRadius: "11px",
          fontSize: "15px",
          cursor: "pointer",
          border: active ? "3px solid #00E0FF" : "none",
          ":hover": {
            boxShadow: !active
              ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
              : "none"
          }
        }}
        onClick={() => setActive((active: boolean) => !active)}
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{
            borderRadius: "11px",
            height: "188px",
            width: "138px",
            alignSelf: "center"
          }}
        />
        <p>{movie.Title}</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <AddCircleOutlineIcon sx={{ width: "20px", height: "20px" }} />
          <PlayCircleOutlineIcon sx={{ width: "20px", height: "20px" }} />
        </div>
      </Container>
    </>
  );
};

export default MovieCard;

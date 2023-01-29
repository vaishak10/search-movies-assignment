import Button from "@mui/material/Button";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 120,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 600 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

function MovieDetailsCard({ movie, active }: { movie: any; active: boolean }) {
  const isRowBased = useMediaQuery("(min-width: 768px)");
  return (
    <div
      style={{
        display: active ? "flex" : "none",
        gridArea: isRowBased ? "1 /span 5" : "1 /span 3",
        background: "#394B61",
        borderRadius: "11px",
        width: isRowBased ? "auto" : "786px"
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          borderRadius: "11px 0 0 11px",
          height: isRowBased ? "411px" : "426px"
        }}
      />
      <div
        className="movie-details-section"
        style={{
          padding: "20px 40px",
          color: "#D4D7DD",
          display: "flex",
          flexDirection: "column",
          gap: "40px"
        }}
      >
        <div
          className="movie-name"
          style={{ display: "flex", flexDirection: "column", gap: "11px" }}
        >
          <p style={{ fontSize: "30px", fontWeight: "700" }}>{movie.Title}</p>
          <p
            style={{
              color: "#FFF",
              display: "grid",
              gridTemplateColumns: "0.2fr auto",
              alignItems: "center",
              gap: "11px"
            }}
          >
            <BorderLinearProgress
              variant="determinate"
              value={+movie.imdbRating * 10}
            />
            {movie.imdbRating}/10
          </p>
        </div>
        <div
          className="movie-details"
          style={{
            display: "flex",
            gap: "36px",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          <div
            className="detail-labels"
            style={{ display: "grid", gap: "11px" }}
          >
            <p>Year:</p>
            <p>Running Time:</p>
            <p>Directed by:</p>
            <p>language:</p>
          </div>
          <div
            className="detail-values"
            style={{ display: "grid", gap: "11px" }}
          >
            <p>{movie.Released}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Director}</p>
            <p>{movie.Language}</p>
          </div>
        </div>
        <p className="movie-plot" style={{ color: "#FFF", fontSize: "14px" }}>
          {movie.Plot}
        </p>
        <div
          className="movie-button-group"
          style={{ display: "flex", gap: "20px" }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#000000",
              background: "#00E0FF"
            }}
          >
            Play Movie
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#00E0FF",
              borderColor: "#00E0FF",
              ":hover": {
                background: "#ed00ff"
              }
            }}
          >
            Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;

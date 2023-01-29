import MoviesSideBar from "./MoviesSideBar";
import Header from "./Header";
import { ProSidebarProvider } from "react-pro-sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

const mainStyle = {
  container: (isRowBased: any) => ({
    flexGrow: 1,
    marginLeft: isRowBased ? "250px" : "0",
    background: "#273244",
    position: "relative",
    overflowX: "hidden",
    height: "100vh"
  })
};

function MoviesContainer(props: any) {
  const isRowBased = useMediaQuery("(min-width: 768px)");
  return (
    <ProSidebarProvider>
      <MoviesSideBar />
      <main style={mainStyle.container(isRowBased)}>
        <Header />
      </main>
    </ProSidebarProvider>
  );
}

export default MoviesContainer;

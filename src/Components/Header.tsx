import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { FaBars } from "react-icons/fa";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useProSidebar } from "react-pro-sidebar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoviesView from "./MoviesView";
const UpdatedSearch = styled("div")(({ theme }) => ({
  transition: "width 0.5s",
  position: "relative",
  "div.icon": {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "16px"
  },
  "div.input": {
    display: "flex",
    position: "relative",
    width: "150px",
    height: "36px",
    left: "36px",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  svg: {
    cursor: "pointer",
    fontSize: "21px"
  }
}));

const Header = () => {
  const { toggleSidebar, broken } = useProSidebar();
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#273244",
            color: "#D4D7DD",
            position: "relative",
            boxShadow: "none"
          }}
        >
          <Toolbar sx={{ gap: "8px", justifyContent: "space-between" }}>
            {broken && (
              <div className={`btn-toggle`} onClick={() => toggleSidebar()}>
                <FaBars />
              </div>
            )}

            <UpdatedSearch
              style={{
                width: searchActive ? "230px" : "0",
                backgroundColor: searchActive ? "#1A2536" : "transparent",
                height: searchActive ? "36px" : "0",
                borderRadius: searchActive ? "4px" : "0"
              }}
            >
              <div className="icon">
                <SearchIcon
                  onClick={() => setSearchActive((state) => !state)}
                />
              </div>
              {searchActive && (
                <div className="input">
                  <input
                    type="text"
                    placeholder="Title, Movies, Keyword"
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff"
                    }}
                    onChange={(event) => setSearchText(event.target.value)}
                    value={searchText}
                  />
                  <CloseOutlinedIcon onClick={() => setSearchText("")} />
                </div>
              )}
            </UpdatedSearch>

            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <LightModeOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <MoviesView searchText={searchText} />
      </div>
    </>
  );
};

export default Header;

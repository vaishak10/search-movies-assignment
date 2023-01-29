import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const MenuStyles = {
  ul: {
    fontSize: "15px",
    paddingLeft: "26px"
  },
  li: {
    ":hover": {
      color: "#000"
    }
  }
};

function MoviesSideBar() {
  return (
    <Sidebar
      customBreakPoint="768px"
      backgroundColor="#1b2330"
      rootStyles={{
        borderRightWidth: "0",
        color: "#D4D7DD",
        height: "100vh",
        position: "fixed"
      }}
    >
      <Menu>
        <div
          style={{
            borderBottom: "1px solid #394B61",
            display: "grid",
            placeContent: "center",
            padding: "1rem",
            fontSize: "20px"
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ margin: 0 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <p>Vaishak</p>
        </div>
      </Menu>
      <Menu
        rootStyles={{ ...MenuStyles, borderBottom: "1px solid #394B61" }}
        menuItemStyles={{
          button: ({ level, active }) => {
            if (level === 0)
              return {
                color: active ? "#00E0FF" : undefined,
                backgroundColor: active ? "transparent" : undefined,
                borderRight: active ? "solid" : undefined,
                ":hover": {
                  color: "#000"
                }
              };
          }
        }}
      >
        <MenuItem active icon={<SearchIcon name="discover" />}>
          Discover
        </MenuItem>
        <MenuItem icon={<PlaylistPlayIcon name="playlist" />}>
          Playlist
        </MenuItem>
        <MenuItem icon={<LiveTvIcon name="movie" />}> Movie </MenuItem>
        <MenuItem icon={<TvIcon name="tv-show" />}> TV Shows </MenuItem>
        <MenuItem icon={<ListIcon name="list" />}> My List </MenuItem>
      </Menu>
      <Menu rootStyles={{ ...MenuStyles, borderBottom: "1px solid #394B61" }}>
        <MenuItem icon={<UpdateIcon name="watch-later" />}>
          Watch Later
        </MenuItem>
        <MenuItem icon={<FavoriteBorderIcon name="recomended" />}>
          Recomended
        </MenuItem>
      </Menu>
      <Menu rootStyles={MenuStyles}>
        <MenuItem icon={<SettingsOutlinedIcon name="settings" />}>
          Settings
        </MenuItem>
        <MenuItem icon={<LogoutOutlinedIcon name="logout" />}>Logout</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default MoviesSideBar;

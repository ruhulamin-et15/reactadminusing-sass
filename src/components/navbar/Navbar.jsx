import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MessageIcon from "@mui/icons-material/Message";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeCotext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <ModeNightIcon
              className="icon mode"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsActiveIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <MessageIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ViewListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/391553731_872047491195874_6863311722950822310_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoj_pllvKnbyQTGN3CTkfW8a2QWObIhBHxrZBY5siEEas-SbJNC4q_VJOuQgkJLzisf0ql52JZMQl0XDAcg_YN&_nc_ohc=bT-GizwbU98AX_8v-xw&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAKrIrbvLwvlLT3hbYPVESog9m-WLo1nuyT2WS048IfRQ&oe=6563F2A1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

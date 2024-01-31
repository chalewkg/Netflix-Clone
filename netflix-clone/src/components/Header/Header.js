import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Lanuages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* //* just to show the css effect delet befor deployment
      sample  */}
      {/*           
      <div className="outer">
        <div className="inner1">
          <div>
            <h1>Div 1</h1>
          </div>

          <div>
            <ul>
              <li>item 1</li>
              <li>item 1</li>
            </ul>
          </div>

          <div>
            <p>Para 1</p>
          </div>
        </div>

        <div className="inner">
          <h1>Div 2</h1>

          <ul>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
          <p>Para 2</p>
        </div>

        <div className="inner">
          <h1>Div 3</h1>

          <ul>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
          <p>Para 3</p>
        </div>
      </div>
       */}
    </>
  );
};

export default Header;

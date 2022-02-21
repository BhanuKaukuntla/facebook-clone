// import React from 'react'
// import { Link } from 'react-router-dom'
// import Menu from './Menu'
// import moboMenu from './moboMenu'
// import Search from './Search'

// const Header = () => {

//     return (
//         <div className="header bg-light">
//             <nav className="navbar navbar-expand-lg navbar-light 
//             bg-light justify-content-between align-middle">

//                 <Link to="/" className="logo">
//                     <h1 className="navbar-brand text-uppercase p-0 m-0"
//                     onClick={() => window.scrollTo({top: 0})}>
//                         V-Network
//                     </h1>
//                 </Link>

//                 <Search />

//                 <Menu />

                
//             </nav>
//         </div>
//     )
// }

// export default Header

import React, { useEffect } from "react";
import {
  FaFacebook,
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
  IoLogOut,
  RiLogoutBoxRFill,
  FiLogOut
} from "react-icons/all";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {

  const navigate = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  // useEffect(() => {
  //   if(!localStorage.getItem("userlogined")){
  //     window.location.href = "/"
  //   }
  // },[window])

  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <Link to="/">
          <FaFacebook className="navbar__logo" />
          </Link>
        </div>
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Facebook Search"
          />
          <FaSistrix className="navar__searchIcon" />
        </div>
      </div>
      <div className="navbar__middle">
        <Link to='/' className="middleIcon">
          <FaHome className="navbar__middle-icons" />
        </Link>
        <span className="middleIcon">
          <FaFontAwesomeFlag className="navbar__middle-icons" />
          <span className="navbar__notify">3</span>
        </span>
        <span className="middleIcon">
          <FaVideo className="navbar__middle-icons" />
          <span className="navbar__notify">10</span>
        </span>
        <span className="middleIcon">
          <FaUsers className="navbar__middle-icons" />
          <span className="navbar__notify">22</span>
        </span>
        <span className="middleIcon">
          <FaGamepad className="navbar__middle-icons" />
          <span className="navbar__notify">5</span>
        </span>
      </div>
      <div className="navbar__last">
        <span className="navbar__last-section">
          <FaPlus />
        </span>
        <Link to="/message" className="navbar__last-section">
          <FaFacebookMessenger />
        </Link>
        <span className="navbar__last-section">
          <FaBell />
        </span>
        <span className="navbar__last-section" onClick={handleClick}>
          <FiLogOut />
        </span>
      </div>
    </div>
  );
};

export default Navbar;


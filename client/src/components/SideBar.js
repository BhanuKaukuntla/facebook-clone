// import React, { useState } from "react";

// const SideBar = () => {
//   const [state, setState] = useState([
//     { id: 1, image: "/images/fawad1.jpg", name: "Flutter Development" },
//     { id: 2, image: "/images/fawad2.jpg", name: "PHP Development" },
//     { id: 3, image: "/images/fawad3.jpg", name: "React Native Development" },
//     { id: 4, image: "/images/fawad4.jpg", name: "Node JS Development" },
//     { id: 5, image: "/images/imran1.jpg", name: "Vue JS Development" },
//     { id: 6, image: "/images/imran2.jpg", name: "React Development" },
//   ]);
//   return (
//     <div className="sidebar">
//       {state.map((info) => (
//         <div className="sidebar__list" key={info.id}>
//           <div className="sidebar__list-img">
//             <img src={info.image} alt="group image" />
//           </div>
//           <div className="sidebar__list-name">{info.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SideBar;

import React from 'react'
import {
    FaHome,
    MdExplore,
    IoMdNotifications,
    FaEnvelope,
    RiMovieLine,
    BsFillBookmarksFill,
    RiFlag2Line,
    CgGames,
    MdGroups,
    MdEmojiEvents,
    MdEventSeat,
    MdOutlineGroups,
    // IoBookmarks,
    // IoExit,
    RiCameraLensFill,
    FaFeather,
    BsFillCollectionFill,
    FaVideo,
    FaFontAwesomeFlag,
    FaGamepad,
    FaUsers
} from "react-icons/all"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                <a>
                    <FaHome className="icons" />
                    Home
                </a>
                </li>
                <li>
                <a>
                    <MdExplore className="icons" /> Explore
                </a>
                </li>
                <li>
                <a href="/notifications">
                    <IoMdNotifications className="icons" /> Notifications
                </a>
                </li>
                <li>
                <a href='/message'>
                    <FaEnvelope className="icons" /> Messages
                </a>
                </li>
                <li>
                <a href="">
                    <BsFillBookmarksFill className="icons" /> Bookmarks
                </a>
                </li>
                <li>
                <a>
                    <FaVideo className="icons" />
                    Watch
                </a>
                </li>
                <li>
                <a>
                    <FaFontAwesomeFlag className="icons" />
                    Pages
                </a>
                </li>
                <li>
                <a>
                    <FaGamepad className="icons" />
                    Games
                </a>
                </li>
                <li>
                <a>
                    <FaUsers className="icons" />
                    Groups
                </a>
                </li>
                <li>
                <a>
                    <BsFillCollectionFill className="icons" />
                    Collections
                </a>
                </li>
                {/* <div className="sidebar__Btn">
                <a href="">Snap<FaFeather className="icon1"/></a>
                </div>
                <div className="sidebar__Btn">
                    <a href="">Shot<RiCameraLensFill className="icon2"/></a>
                </div>
                <div className="sidebar__Btn3">
                <a href=""><FaFeather className="icon3"/></a>
                </div>
                <div className="sidebar__Btn4">
                    <a href=""><RiCameraLensFill className="icon4"/></a>
                </div> */}
                {/* <li>
                <a href="/login" >
                    <IoExit className="icons" /> Exit
                </a>
                </li> */}
            </ul>
        </div>
    )
}

export default Sidebar
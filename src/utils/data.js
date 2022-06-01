import React from "react";
import { AiOutlineHome, AiOutlineBell, AiOutlineMessage,AiTwotoneHome,AiFillMessage } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
export const data = [
  {
    id: 1,
    text: "Home",
    icon: <AiOutlineHome />,
    icon2:<AiTwotoneHome/>,
    url:"/",
    value:1
  },
  {
    id: 2,
    text: "Explore",
    icon: <HiOutlineHashtag />,
    icon2:<FaHashtag/>,
    url:"/explore",
    value:2
  },
  {
    id: 3,
    text: "Notification",
    icon: <AiOutlineBell />,
    icon2:<IoIosNotifications/>,
    url:"/notification",
    value:3
  },
  {
    id: 4,
    text: "Message",
    icon: <AiOutlineMessage />,
    icon2:<AiFillMessage/>,
    url:"/message",
    value:4
  },
  {
    id: 5,
    text: "More",
    icon: <BsThreeDots />,
    icon2:<BsThreeDots/>,
    url:"",
    value:5
  },
];

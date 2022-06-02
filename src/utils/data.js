import React from "react";
import { AiOutlineHome, AiOutlineBell, AiOutlineMessage,AiTwotoneHome,AiFillMessage,AiOutlineFileGif,AiOutlineSchedule ,AiOutlineHeart} from "react-icons/ai";
import { FaHashtag ,FaRegCommentAlt,FaRetweet} from "react-icons/fa";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDots , BsPeople,BsFillPeopleFill,BsImage,BsEmojiSmile,BsShare} from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
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
    text: "Communities",
    icon: <BsPeople />,
    icon2:<BsFillPeopleFill/>,
    url:"/communities",
    value:3
  },
  {
    id: 4,
    text: "Notification",
    icon: <AiOutlineBell />,
    icon2:<IoIosNotifications/>,
    url:"/notification",
    value:4
  },
  {
    id: 5,
    text: "Message",
    icon: <AiOutlineMessage />,
    icon2:<AiFillMessage/>,
    url:"/message",
    value:5
  },
  {
    id: 6,
    text: "More",
    icon: <BsThreeDots />,
    icon2:<BsThreeDots/>,
    url:"",
    value:6
  },
];


export const icons = [
  <BsImage/>,
  <AiOutlineFileGif/>,
  <BiPoll/>,
  <BsEmojiSmile/>,
  <AiOutlineSchedule/>,
  
]

export const postIcons = [
<FaRegCommentAlt/>,
<FaRetweet/>,
<AiOutlineHeart/>,
<BsShare/>,

]
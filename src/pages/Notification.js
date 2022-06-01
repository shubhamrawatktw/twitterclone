import React from 'react'
import Header from '../components/Header'
import { AiOutlineSetting} from "react-icons/ai";

export default function Notification() {
  return (
    <div>
     <Header  title="  notification"  icons={[<AiOutlineSetting/>]}/>
    
    </div>
  )
}

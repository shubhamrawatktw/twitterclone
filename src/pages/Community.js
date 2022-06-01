import React from 'react'
import Header from '../components/Header'
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle} from "react-icons/ai";
export default function Community() {
  return (
    <div>
        <Header  title=" communities" icons={[<FiSearch/>,<AiOutlinePlusCircle/>]}/>
     
    </div>
  )
}

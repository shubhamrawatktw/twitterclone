import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import { IoSparklesOutline } from "react-icons/io5";

export default function Home() {
  return (
    <Wrapper>
      <Header title="home" icons={[<IoSparklesOutline />]} />
      <Tweet />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  
`;

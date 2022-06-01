import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import { IoSparklesOutline } from "react-icons/io5";
import Post from '../components/Post';

export default function Home() {
  return (
    <Wrapper>
      <Header title="home" icons={[<IoSparklesOutline />]} />
      <Tweet />
      <Post/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: var(--clr-primary-10);
`;

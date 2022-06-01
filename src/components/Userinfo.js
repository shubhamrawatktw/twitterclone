import React from "react";
import styled from "styled-components";
import img from "../assets/img.jpg";
import { BsThreeDots } from "react-icons/bs";
export default function Userinfo() {
  return (
    <Wrapper >
      <div >
        <img src={img} alt="user" />
      </div>
      <div className="user-details">
        <h5>Shubham</h5>
          <h6>@shubham</h6>
      </div>
  <BsThreeDots/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 0.5rem 0.5rem;
  /* border: 1px solid red; */
  border-radius: 2rem;
  cursor: pointer;
  
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  .user-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h6{
        font-size: 0.8rem;
        font-weight: 500;
        margin-top: -0.5rem;
    }
  }

  &:hover{
      background-color: var(--clr-primary-10);
  }
`;

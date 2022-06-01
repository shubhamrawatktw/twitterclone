import React from "react";
import styled from "styled-components";
import img from "../assets/img.jpg";
import { BsThreeDots } from "react-icons/bs";
export default function Post() {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="user" />
      </div>
      <div className="user-details ">
        <header >
          <div className="header ">
            <h5>Shubham</h5>
            <h6>@shubham</h6>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          temporibus, repellat voluptatibus iusto dolor nihil voluptas doloribus
          provident. Saepe iste, ipsum aliquid commodi, quasi adipisci eos
          blanditiis, earum ipsa ut iusto rem. Exercitationem commodi ut, culpa
          deleniti incidunt ducimus quam quaerat amet, enim ipsa, eveniet
          perspiciatis veritatis delectus dolore totam?
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.6rem 1rem;
  gap: 1rem;

  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    cursor: pointer;
  }

  .user-details {
    header {
        /* height: 3rem; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 2rem;
        padding: 0 0.5rem;
        border-radius: 50%;
        &:hover{
      background-color: var(--clr-primary-10);
        }
      }
      .header {
        display: flex;
        
        /* padding: 0 1.5rem; */
        h5 {
          &:hover {
            text-decoration: underline;
          }
        }
        h6 {
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0rem 1rem;
        }
      }
    }
  }
`;

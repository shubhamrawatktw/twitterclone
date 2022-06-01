import React from "react";
import styled from "styled-components";
import img from "../assets/img.jpg";
import { icons } from "../utils/data";

export default function Tweet() {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="user" />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder={`What's happening ?`}
          className="input"
        />
        <div className="footer">
          <div className="icons">
            {icons.map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
          </div>
          <button type="button" className="btn">
            Tweet
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.6rem 1rem;
  height: 8rem;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    cursor: pointer;

  }
  .input-box {
    padding: 0 1rem;

    .input {
      border: transparent;
      padding: 1rem 1rem;
      display: block;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0.5rem;
      .icons {
        display: flex;
       svg{
           font-size: 2.5rem;
           border-radius: 25%;
           padding: 0.5rem;
        cursor: pointer;
          color: var(--clr-primary-5);
           &:hover{
               background-color: var(--clr-primary-10);
           }
       }
      }
      .btn {
        text-transform: capitalize;
        background: var(--clr-primary-8);
        color: var(--clr-primary-10);
        padding: 0 1.2rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        font-weight: 400;
        transition: var(--transition);
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 2rem;
        border-color: transparent;
      }
      .btn:hover {
        color: var(--clr-primary-1);
        background: var(--clr-primary-7);
      }
    }
  }
`;

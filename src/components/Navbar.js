import React from "react";
import  {  useState } from "react";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { data } from "../utils/data";
import Userinfo from "./Userinfo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [value ,setValue] = useState(1)
    
  return (
    <Wrapper>
      <div className="logo">
        <Link to="/">
          <BsTwitter />
        </Link>
      </div>
      <div>
        <ul className="links">
          {data.map((item) => {
            return (
              <li key={item.id}  onClick={()=>setValue(item.value)} >
                <Link to={item.url} className={item.id === value ? "active" : null} >
                {item.id === value ? item.icon2:item.icon}
                 <span>{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn">
          Tweet
        </button>
      </div>
      <hr />
      <Userinfo />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid;
  border-color: var(--clr-primary-10);
  padding: 0.5rem 3rem;
  .logo {
    margin-bottom: 1rem;
    /* padding: 0 0.5rem; */
    svg {
      font-size: 3rem;
      border-radius: 2rem;
      color: var(--clr-primary-5);
      padding: 0 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: var(--clr-primary-10);
      }
    }
  }

  .links {
    margin-bottom: 1rem;

    li {
      display: inline-flex;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--clr-grey-1);
      border-radius: 1rem;
      padding: 0.5rem;
      cursor: pointer;
      a{
        color: var(--clr-grey-1);
        display: flex;

        span {
          text-align: center;
          padding: 0 1rem;
         
        }
        svg {
          font-size: 2rem;
        }
      }
      &:hover {
        background-color: var(--clr-primary-10);
      }
    }
  }
  button {
    margin-bottom: 1.5rem;
  }
  .active {
    font-weight: bold;
    svg {
    color: var(--clr-primary-5);
    }

  }
`;

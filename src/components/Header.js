import React from "react";
import styled from "styled-components";

export default function Header({ title, icons }) {
  return (
    <Wrapper >
      <h4>{title}</h4>
      <div className="icons">
        {icons &&
          icons.map((icon, index) => {
            return <div key={index}>{icon}</div>;
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  h4 {
    font-weight: 600;
    cursor: pointer;
  }
  svg {
    font-size: 2.5rem;
    font-weight: 200;
    padding: 0.6rem 0.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: var(--clr-primary-10);
      transition: var(--transition);
    }
  }
  .icons{
    display: flex;
  }
`;

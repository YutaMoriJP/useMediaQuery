import React from "react";
import useMediaQuery from "./useMediaQuery";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: var(--primary-bgcolor);
  color: var(--primary-color);
  margin: 0;
  padding: 10px;
  display: flex;
  font-weight: 900;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 10px;
`;

const NavBar = ({ Desktop, Mobile, Tablet, options }) => {
  const mobile = useMediaQuery(`(max-width: 500px)`);
  const tablet = useMediaQuery(`(min-width: 501px) and (max-width: 800px)`);

  return (
    <>
      <NavWrapper>
        {mobile ? (
          <Mobile options={options} />
        ) : tablet ? (
          <Tablet options={options} />
        ) : (
          <Desktop options={options} />
        )}
      </NavWrapper>
    </>
  );
};

export default NavBar;

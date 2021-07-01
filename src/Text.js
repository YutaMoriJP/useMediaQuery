import styled from "styled-components";

export default styled.p`
  max-width: 700px;
  padding: 10px;
  background: #212529;
  color: white;
  margin: 10px;
  border-radius: 10px;
  line-height: 30px;
  text-align: left;
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    line-height: 25px;
  }
`;

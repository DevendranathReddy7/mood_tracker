import styled from "styled-components";

export const MainNavContainer = styled.div`
  display: flex;
  margin: 8px 16px;
  justify-content: space-between;
  color: #ffbe38;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  color: whitesmoke;
  text-decoration: none;
  background-color: transparent;
  border: ${(props) => (props.logout ? "1px solid #ffbe38" : "none")};
  padding: 5px 8px;
  border-radius: 3px;
`;

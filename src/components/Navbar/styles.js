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
  @media (max-width: 448px) {
    display: none;
  }
`;

export const NavMobileContainer = styled.div`
  @media (min-width: 448px) {
    display: none;
  }
`;
export const Button = styled.button`
  color: whitesmoke;
  text-decoration: none;
  background-color: transparent;
  border: ${(props) => (props.logout ? "1px solid #ffbe38" : "none")};
  padding: 5px 8px;
  border-radius: 3px;
  @media (max-width: 448px) {
    margin-bottom: 10px;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  z-index: 100;
  background: #1c1a28;
  width: 88%;
  top: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 0.1px solid #ffbe38;
  border-radius: 3px;
`;

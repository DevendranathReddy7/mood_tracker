import { Link } from "react-router-dom";
import {
  MainNavContainer,
  NavLinksContainer,
  Button,
  NavMobileContainer,
  ModalDiv,
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Navbar = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleShowModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const showModal = () => {
    return (
      <ModalDiv>
        <Link to="/home">
          <Button onClick={handleCloseModal}>Home </Button>
        </Link>

        <Link to="/reports">
          <Button onClick={handleCloseModal}>Reports </Button>
        </Link>

        <Link to="/login">
          <Button logout onClick={handleCloseModal}>
            Log-out{" "}
          </Button>
        </Link>
      </ModalDiv>
    );
  };

  return (
    <MainNavContainer>
      <div>Daily Mood Tracker</div>
      <NavLinksContainer>
        <Link to="/home">
          <Button>Home </Button>
        </Link>

        <Link to="/reports">
          <Button>Reports </Button>
        </Link>

        <Link to="/login">
          <Button logout>Log-out </Button>
        </Link>
      </NavLinksContainer>
      <NavMobileContainer>
        {openModal ? (
          <IoClose size={30} onClick={handleCloseModal} />
        ) : (
          <RxHamburgerMenu size={30} onClick={handleShowModal} />
        )}
      </NavMobileContainer>
      {openModal && showModal()}
    </MainNavContainer>
  );
};

export default Navbar;

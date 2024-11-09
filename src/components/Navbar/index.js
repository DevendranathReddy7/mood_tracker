import { Link } from "react-router-dom";
import { MainNavContainer, NavLinksContainer } from "./styles";

const Navbar = (props) => {
  return (
    <MainNavContainer>
      <div>Daily Mood Tracker</div>
      <NavLinksContainer>
        <Link to="/home">Home</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/login">Log-out</Link>
      </NavLinksContainer>
    </MainNavContainer>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { MainNavContainer, NavLinksContainer, Button } from "./styles";

const Navbar = (props) => {
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
    </MainNavContainer>
  );
};

export default Navbar;

import HeaderProps from "../types/Header.types";
import Heading from "./Heading";

const Header = ({ name, isLoggedIn }: HeaderProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <Heading>{`Welcome ${name} To React App With TS`}</Heading>
      ) : (
        <Heading>Welcome To React App With TS</Heading>
      )}
    </div>
  );
};

export default Header;

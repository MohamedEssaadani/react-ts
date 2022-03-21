import ButtonProps from "../Props/ButtonProps";

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 12)}>Button</button>
  );
};

export default Button;

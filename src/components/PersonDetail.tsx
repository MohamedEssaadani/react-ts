import { useState } from "react";
import PersonProps from "../Props/Person.types";
import Button from "./Button";
import Input from "./Input";

const PersonDetail = (props: PersonProps) => {
  const [input, setInput] = useState("");

  return (
    <>
      <h4>
        {props.person.firstName} {props.person.lastName}
      </h4>

      <Input
        value={input}
        handleChange={(event) => {
          setInput(event.target.value);
        }}
      />

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked!", event, id);
        }}
      />
    </>
  );
};

export default PersonDetail;

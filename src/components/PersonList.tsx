import PersonListProps from "../Props/PersonListProps";
import PersonDetail from "./PersonDetail";

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.persons.map((person, index) => {
        return <PersonDetail key={index} person={person} />;
      })}
    </div>
  );
};

export default PersonList;

import PersonProps from "../Props/PersonProps"

const PersonDetail = (props: PersonProps) => {
  return (
    <h4> 
        {props.person.firstName} 
        {" "}
        {props.person.lastName}
    </h4>
  )
}

export default PersonDetail
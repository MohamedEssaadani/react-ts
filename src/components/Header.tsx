import HeaderProps from "../Props/HeaderProps"

const Header = (props : HeaderProps) => {
  return (
    <div>
      {props.isLoggedIn ?
       <h2>Welcome {props.name} To React App With TS</h2> :
        <h2>Welcome To React App With TS</h2>}
    </div>
  )
}

export default Header
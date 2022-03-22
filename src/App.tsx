import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { personList } from "./data/persons";
import Loggedin from "./state/Auth";
import Counter from "./state/Counter";

function App() {
  return (
    <div className="App">
      <HeaderContainer>
        <Header name="Adam" isLoggedIn={true} />
      </HeaderContainer>
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        {/* <PersonList persons={personList} />
        <Status status="loading" /> */}
        <Counter />
        <Loggedin />
      </Container>
    </div>
  );
}

export default App;

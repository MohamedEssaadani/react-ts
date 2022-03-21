import "./App.css";
import Header from "./components/Header";
import PersonDetail from "./components/PersonDetail";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Person } from "./Props/PersonProps";

function App() {
  // Person
  const person: Person = {
    firstName: "Mohamed",
    lastName: "ESSAADANI",
  };

  const personList: Person[] = [
    person,
    {
      firstName: "Hicham",
      lastName: "ESSAADANI",
    },
    {
      firstName: "Halima",
      lastName: "ESSAADANI",
    },
    {
      firstName: "Saloi",
      lastName: "ESSAADANI",
    },
  ];

  return (
    <div className="App">
      <Header name="Mohamed" isLoggedIn={true} />
      <PersonList persons={personList} />
      <Status status="loading" />
    </div>
  );
}

export default App;

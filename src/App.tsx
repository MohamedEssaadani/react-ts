import "./App.css";
import Container from "./components/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import AuthUserContextProvider from "./components/context/UserContext";
import Counter from "./components/Counter";
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";

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
        {/* <Counter />
        <Loggedin /> */}

        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>

        <AuthUserContextProvider>
          <User />
        </AuthUserContextProvider>

        {/* <DomRef />
        <MutableRef /> */}

        <Counter message="Counter is " />
      </Container>
    </div>
  );
}

export default App;

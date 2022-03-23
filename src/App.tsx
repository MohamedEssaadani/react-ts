import "./App.css";
import Container from "./components/Container";
<<<<<<< HEAD
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import AuthUserContextProvider from "./components/context/UserContext";
import Counter from "./components/Counter";
=======
import List from "./components/generics/List";
>>>>>>> hooks-ts
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";

function App() {
  const listClickHandler = (item: string) => {
    alert(item);
  };
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

        {/* <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>

        <AuthUserContextProvider>
          <User />
        </AuthUserContextProvider> */}
        {/* 
        <Private isLoggedIn={true} component={Profile} />
        <Private isLoggedIn={false} component={Profile} /> */}

        <List
          listItems={["Real Madrid", "Barca", "Liverpool"]}
          onClick={listClickHandler}
        />
        <List listItems={[22, 13, 33]} onClick={listClickHandler} />
      </Container>
    </div>
  );
}

export default App;

import "./App.css";
import Container from "./components/Container";
import List from "./components/generics/List";
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";
import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  const listClickHandler = (item: {}) => {
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

        <RandomNumber value={33} isPositive />
      </Container>
    </div>
  );
}

export default App;

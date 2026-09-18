import "./App.css";
import Main from "./Main";
import Navigation from "./Navigation";
import Pets from "./Pets";
import Players from "./Players";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Pets></Pets>
      <br></br>
      <Players></Players>
      <br></br>
      <Navigation></Navigation>
      <Main></Main>
      <footer></footer>
    </>
  );
}

export default App;

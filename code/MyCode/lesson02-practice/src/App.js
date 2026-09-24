import "./App.css";
import ComponentA from "./ContextHook/ComponentA";
import BaseEffectHook from "./EffectHook/BaseEffectHook";
import OnlineStatus from "./EffectHook/OnlineStatus";
import Main from "./Main";
import Navigation from "./Navigation";
import Pets from "./Pets";
import Players from "./Players";

function App() {
  return (
    <header className="App-header">
      {/* <Navigation></Navigation>
      <Pets></Pets>
      <br></br>
      <Players></Players>
      <br></br>
      <Navigation></Navigation>
      <Main></Main>
      <footer></footer> */}

      {/* <ComponentA></ComponentA> */}

      {/* <BaseEffectHook></BaseEffectHook> */}

      <OnlineStatus></OnlineStatus>
    </header>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import BaseEffectHook from './EffectHook/BaseEffectHook';
import OnlineStatus from './EffectHook/OnlineStatus';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <BaseEffectHook /> */}
        <OnlineStatus />
      </header>
    </div>
  );
}

export default App;

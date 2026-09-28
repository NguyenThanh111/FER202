import './App.css';
import AppNavbar from './Components/AppNavbar';
import Orchids from './Components/Orchids';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppNavbar />
        <Orchids />
      </div>
    </AuthProvider>
  );
}

export default App;

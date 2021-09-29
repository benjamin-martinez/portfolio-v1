import './App.css';
import { GlobalStyle } from './ui-styles/global';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;

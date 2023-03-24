import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBudget } from './components/IncomeBudget';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeBudget />
      </div>
    </div>
  );
}

export default App;

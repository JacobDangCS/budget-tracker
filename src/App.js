import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBudget } from './components/IncomeBudget';
import { TransList } from './components/TransList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeBudget />
        <TransList />
      </div>
    </div>
  );
}

export default App;

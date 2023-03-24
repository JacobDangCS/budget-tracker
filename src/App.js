import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBudget } from './components/IncomeBudget';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeBudget />
        <TransList />
        <AddTrans />
      </div>
    </div>
  );
}

export default App;

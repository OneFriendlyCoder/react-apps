import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';
import { GLobalProvider } from './context/GlobalState.js';


function App() {
  return (
    <GLobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GLobalProvider>
  );
}

export default App;

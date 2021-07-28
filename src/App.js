import './css/main.css'
import Transaction from './components/Transaction';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import dataContext from './data/dataContext';
import Report from './components/Report';

function App() {
  const [items, setItem] = useState([]);

  const [reportIncome, setRepotIncome] = useState(0)
  const [reportExpense, setRepotExpense] = useState(0)

  const addNewItem = newItem => {
    setItem(prevItem => [newItem, ...prevItem])
  }

  useEffect(() => {
    const amount = items.map(item => item.amount)
    const income = amount.filter(el => el > 0).reduce((total, el) => total += el, 0)
    const expense = (amount.filter(el => el < 0).reduce((total, el) => total += el, 0)) * -1
    
    console.log('รายได้' + income)
    console.log('รายจ่าย' + expense)
    setRepotIncome(income)
    setRepotExpense(expense)

  }, [items, reportIncome, reportExpense])

  return (
    <dataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <main className="container">
        <h1 className="header"> บัญชี รายรับ รายจ่าย</h1>
        <Report />
        <Form onAddNewItem={addNewItem} />
        <Transaction transaction_list={items} />
      </main>
    </dataContext.Provider>
  );
}

export default App;

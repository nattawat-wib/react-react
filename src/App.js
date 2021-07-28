import './css/main.css'
import Transaction from './components/Transaction';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import dataContext from './data/dataContext';
import Report from './components/Report';

function App() {
  const initState = [
    { id: 1, title: 'ค่าเช่าบ้าน', amount: -2000 },
    { id: 2, title: 'เงินเดือน', amount: 2000 },
    { id: 3, title: 'ค่าเดินทาง', amount: -800 },
    { id: 4, title: 'ขายของ', amount: 400 },
  ]

  const [items, setItem] = useState(initState);

  const [reportIncome, setRepotIncome] = useState(0)
  const [reportExpense, setRepotExpense] = useState(0)

  const addNewItem = newItem => {
    setItem(prevItem => [newItem, ...prevItem])
  }

  useEffect(() => {
    const amount = items.map(item => item.amount)
    const income = amount.filter(el => el > 0).reduce((total, el) => total += el, 0)
    const expense = amount.filter(el => el < 0).reduce((total, el) => total += el, 0)
    
    console.log('รายได้' + income)
    console.log('รายจ่าย' + expense)

  }, [items])

  return (
    <dataContext.Provider value={{ income: 50000, expense: -8000 }}>
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

import logo from './logo.svg';
import './css/main.css'
import Transaction from './components/Transaction';
import Form from './components/Form';

function App() {
  return (
    <>
      <main className="container">
        <h1 className="header"> บัญชี รายรับ รายจ่าย</h1>
        <Form/>
        <Transaction/>
      </main>
    </>
  );
}

export default App;

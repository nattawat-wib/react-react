import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formValid, setFormValid] = useState(false);
    
    const inputTile = e => {
        setTitle(e.target.value);
    }

    const inputAmount = e => {
        setAmount(e.target.value)
    }

    const saveItem = e => {
        e.preventDefault()
        
        const data = {
            key: uuidv4(),
            title, 
            amount: Number(amount)
        }
        
        props.onAddNewItem(data)
        setTitle('');
        setAmount(0)
        setFormValid(false)
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0;
        setFormValid(checkData);
            
    }, [title, amount])

    return (
        <section>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label> ชื่อรายการ </label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTile} value={title}></input>
                </div>
                <div className="form-control">
                    <label> จำนวนเงิน </label>
                    <input type="number" placeholder="(+รายรับม - รายจ่าย)" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}> เพิ่มข้อมูล </button>
                </div>
            </form>
        </section>
    )
}

export default Form
 
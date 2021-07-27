import React from 'react'

const Form = () => {
    const inputTile = e => {
        console.log(e.target.value)
    }

    const inputAmount = e => {
        console.log(e.target.value)
    }

    const saveItem = e => {
        e.preventDefault()
        console.log('บันทึกข้อมูลเรียบร้อย')
    }

    return (
        <section>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label> ชื่อรายการ </label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTile}></input>
                </div>
                <div className="form-control">
                    <label> จำนวนเงิน </label>
                    <input type="number" placeholder="(+รายรับม - รายจ่าย)" onChange={inputAmount}></input>
                </div>
                <div>
                    <button type="submit"> เพิ่มข้อมูล </button>
                </div>
            </form>
        </section>
    )
}

export default Form
 
import React, { useContext } from 'react'
import dataContext from '../data/dataContext'

const Report = () => {
    const {income, expense} = useContext(dataContext)

    return (
        <section>
            <p> ราบรับ : {income} </p>
            <p> ราบจ่าย : {expense} </p>
        </section>
    )
}

export default Report

import React from 'react';
import Item from './Item';
import {v4 as uuidv4} from 'uuid';

const Transaction = () => {
    const transaction_list = [
        {title: 'ค่ารักษาพยาบาล', amount: 2000},
        {title: 'ค่าเดินทาง', amount: 500},
        {title: 'ค่าาเช่าบ้าน', amount: 7000},
        {title: 'ค่าน้ำมัน', amount: 3840},
        {title: 'ค่าของใช้', amount: 200},
    ]

    return (
        <ul>
            {transaction_list.map(list => <Item {...list} key={uuidv4()}/>)}
        </ul>
    )
}

export default Transaction

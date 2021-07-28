import React from 'react';
import Item from './Item';

const Transaction = (props) => {
    const {transaction_list} = props

    return (
        <ul>
            {transaction_list.map(list => <Item {...list}/>)}
        </ul>
    )
}

export default Transaction

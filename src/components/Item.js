import React from 'react'
import PropTypes from 'prop-types';

const Item = (props) => {
    const {title, amount} = props
    const status = amount<0 ? 'expense' : 'income'

    return <li className={status}> {title} <span> {amount} บาท </span> </li>
}

Item.propTypes= {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item
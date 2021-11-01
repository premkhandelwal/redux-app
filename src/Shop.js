import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'
import { useSelector } from 'react-redux';


const Shop = () => {
    const dispatch = useDispatch();
    const {despositMoney, withDrawMoney} = bindActionCreators(actionCreators,dispatch);
    const balance = useSelector(state => state.amount);

    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2" onClick = {()=>{withDrawMoney(1)}}> - </button>
            Update Balance {balance}
            <button className="btn btn-primary mx-2" onClick = {() => {despositMoney(1)}}> + </button>

        </div>
    )
}

export default Shop

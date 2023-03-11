import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { depositMoney, withdrawMoney } from './State/action-creators';
// import {actionCreator} from "./State/index"
export default function Balance() {

  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreator,dispatch)
  // const {withdrawMoney,depositMoney} = bindActionCreators(actionCreator,dispatch)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button onClick={()=>{dispatch(withdrawMoney(100))}}>-</button>
        {/* <button onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}}>--</button>
        <button onClick={()=>{actions.withdrawMoney(100)}}>---</button>
        <button onClick={()=>{withdrawMoney(100)}}>----</button> */}
        Update Balance
        <button onClick={()=>{dispatch(depositMoney(1000))}}>+</button>
        {/* <button onClick={()=>{dispatch(actionCreator.depositMoney(1000))}}>++</button>
        <button onClick={()=>{actions.depositMoney(1000)}}>+++</button>
        <button onClick={()=>{depositMoney(1000)}}>++++</button> */}
       
    </div>
  )
}

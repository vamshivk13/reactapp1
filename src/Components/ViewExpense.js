import { Modal,Stack,Button } from "react-bootstrap";
import { reducerActions } from "../Store/reducerActions";
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";

export default function ViewExpense() {
    const dispatch=useDispatch()
    const isVisible=useSelector((state)=>state.viewExpenseToggle)
    const expenses=useSelector((state)=>state.expenses)
    const curExpenseID=useSelector((state)=>state.curExpenseID)
    const budgets=useSelector((state)=>state.budgets)
    function handleDelete(){
        dispatch(reducerActions.deleteExpense(curExpenseID))
        dispatch(reducerActions.setViewExpenseToggle())
    }
    function removeExpense(expid){
        dispatch(reducerActions.setRemoveExpense(expid))
    }


  return <div>
      <Modal show={isVisible} onHide={()=>{
        dispatch(reducerActions.setViewExpenseToggle())
        }}>
        <Modal.Header closeButton>
         <Modal.Title>
         <Stack direction="horizontal" gap="2">
                 <div>Expense-{budgets.filter((item)=>item.id==curExpenseID)[0]?.budgetName}</div>
            <div>   <Button onClick={handleDelete}  variant="outline-danger">del</Button></div> 
             </Stack>
         </Modal.Title>
        </Modal.Header>
       <Modal.Body>
       <Stack direction="vertical" gap="2">
         <div>
             {expenses.filter((item)=>item.id==curExpenseID).map((exp)=>{return <div key={exp.expId}>{exp.desc}-{exp.curAmount}<Button onClick={()=>{
             removeExpense(exp.expId)
         }}variant="outline-blue">X</Button></div>})}
         </div>
       </Stack>
       </Modal.Body>

      </Modal>
  </div>;
}

import React from 'react';
import { Form, Modal, Button } from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import { reducerActions } from '../Store/reducerActions';
import { useRef } from 'react';
import reducer from '../Store/reducer';
export default function AddExpenseComponent() {
const dispatch=useDispatch()
const isVisible=useSelector((state)=>state.expenseAddToggle)
const curExpenseID=useSelector((state)=>state.curExpenseID)
const budgets=useSelector((state)=>state.budgets)
const description=useRef('')
const cur_amount=useRef(0)
 function handleSubmit(e){
    e.preventDefault();
    console.log({
      id:curExpenseID,
      expId:(description.current.value+cur_amount.current.value.toString()),
      desc:description.current.value,
      curAmount:cur_amount.current.value
    })
dispatch(reducerActions.setExpenses({
      id:curExpenseID,
      expId:(description.current.value+cur_amount.current.value.toString()),
      desc:description.current.value,
      curAmount:cur_amount.current.value
    }))
    dispatch(reducerActions.setExpenseAddToggle())
 }
  return <div>
        <Modal show={isVisible} onHide={()=>{
        dispatch(reducerActions.setExpenseAddToggle())
        }}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text" 
            required 
            ref={description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              required
              min={0}
              step={0.01}
              ref={cur_amount}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={curExpenseID}>
              <option id={-1}>Uncategorized</option>
              {budgets.map(budget => (
                <option key={budget.id} value={budget.id}>
                  {budget.budgetName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  </div>;
}

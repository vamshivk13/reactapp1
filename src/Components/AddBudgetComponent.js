import React from 'react';
import { Form, Modal, Button } from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import { reducerActions } from '../Store/reducerActions';
var k=0;
export default function AddBudgetComponent() {
    const dispatch=useDispatch()
   const maxSpend=useSelector((state)=>state.maxSpend)
   const budgetName=useSelector((state)=>state.budgetName)
   const isVisible=useSelector((state)=>state.budgetAddToggle)
  function handleMaxSpend(e)
  {
    e.preventDefault()
    dispatch(reducerActions.setMaxSpend(e.target.value))
  }
  function handleBudgetName(e)
  {
    e.preventDefault()
    dispatch(reducerActions.setBudgetName(e.target.value))
  }
  function addBudget(){
    const temp={
      id:k,
      budgetName:budgetName,
      maxSpend:maxSpend,
    }
    k++;
    dispatch(reducerActions.setBudget(temp))
    dispatch(reducerActions.setBudgetAddToggle())
  }
  return <div>
      <Modal show={isVisible} onHide={()=>{
        dispatch(reducerActions.setBudgetAddToggle())
        }}>
      <Form >
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            value={budgetName}
            onChange={handleBudgetName}
            required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
           
              type="number"
              value={maxSpend}
              onChange={handleMaxSpend}
              required
             
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={addBudget}>
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  </div>;
}

import React from 'react';
import {Card,ProgressBar,Stack,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import {reducerActions} from '../Store/reducerActions'
export default function BudgetCard({id,budgetName,curSpend,maxSpend}) {
    const dispatch=useDispatch()
    const curExpenseID=useSelector((state)=>state.curExpenseID)
  const expenses=useSelector((state)=>state.expenses)
  
  const getVarientForProgressBar=(curr,tot)=>{
    const ratio=curr/tot;
    if(ratio<0.5)
     return "primary"
     else if(ratio<0.75)
     return  "warning"
     else
     return "danger"
  }

  function handleAddExpense(e){
    dispatch(reducerActions.setExpenseAddToggle())
    dispatch(reducerActions.setCurExpenseID(e.target.value))
  }
  function handleViewExpenses(e){
    dispatch(reducerActions.setViewExpenseToggle())
    dispatch(reducerActions.setCurExpenseID(e.target.value))
  }



  return <div>
      <Card>
          <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                  <div className="me-2">
                  {budgetName} 
                  </div>
                  {maxSpend&&<div>{curSpend}/{maxSpend}</div>}
                  {!maxSpend&&<div>{curSpend}</div>}
              </Card.Title>
              {maxSpend&&<ProgressBar className='rounded-pill' 
              variant={getVarientForProgressBar(curSpend,maxSpend)}
              now={curSpend}
              min={0}
              max={maxSpend}>

              </ProgressBar>}
              {id!=undefined&&<Stack direction="horizontal" gap="2" className="mt-3">
                  <Button value={id} onClick={handleAddExpense}variant="outline-primary" className="ms-auto">
                  Add Expense
                  </Button>
                  <Button value={id} onClick={handleViewExpenses} variant="outline-secondary ">
                      View Expenses
                  </Button>
              </Stack>}
          </Card.Body>
      </Card>
  </div>;
}

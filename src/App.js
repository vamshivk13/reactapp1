import Container from "react-bootstrap/Container"
import { Button,Stack } from "react-bootstrap";
import BudgetCard from "./Components/BudgetCard";
import { useState } from "react";
import AddBudgetComponent from "./Components/AddBudgetComponent";
import AddExpenseComponent from "./Components/AddExpenseComponent";
import { useDispatch, useSelector } from "react-redux";
import { reducerActions } from "./Store/reducerActions";
import ViewExpense from "./Components/ViewExpense";
import TotalExpense from "./Components/TotalExpense";
function App() {
  const dispatch=useDispatch()
 
  const budgets=useSelector((state)=>state.budgets)
  const expenses=useSelector((state)=>state.expenses)
  const uncategorized_exp=useSelector((state)=>state.expenses).find((item)=>item.id==-1)
  
  function AddExpensehandler(){
    dispatch(reducerActions.setExpenseAddToggle())
    dispatch(reducerActions.setCurExpenseID(-1))
  }
  return (
   <Container className="my-4">
     <Stack direction="horizontal" gap="2" className="mb-4">
       <h1 className="me-auto">Budgets</h1>
       <Button variant="primary" onClick={()=>dispatch(reducerActions.setBudgetAddToggle())}>Add BudGet</Button>
       <Button variant="outline-primary" onClick={AddExpensehandler}>Add Expense</Button>
     </Stack>
     <div>
      {budgets.map((item,index)=>{
         const curSpend=expenses.filter((item1)=>item1.id==item.id)?.reduce((sum,cur_item)=>{
          return Number(sum)+Number(cur_item.curAmount)
        },0)
         return <div key={index}> <BudgetCard id={item.id} curSpend={curSpend} budgetName={item.budgetName} maxSpend={item.maxSpend}></BudgetCard></div>
       })}
     </div>
     {uncategorized_exp&& <BudgetCard id={-1} curSpend={expenses.filter((item1)=>item1.id==-1)?.reduce((sum,cur_item)=>{
          return Number(sum)+Number(cur_item.curAmount)
        },0)} budgetName={"UnCategorized"}/>}
     <AddBudgetComponent></AddBudgetComponent>
     <AddExpenseComponent></AddExpenseComponent>
     <ViewExpense></ViewExpense>
     <TotalExpense></TotalExpense>
   </Container>   
  )
}

export default App;

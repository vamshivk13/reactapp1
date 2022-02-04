import React from 'react';
import BudgetCard from './BudgetCard';
import { useSelector } from 'react-redux';
export default function TotalExpense() {
    const budgets=useSelector((state)=>state.budgets).reduce((sum,item)=>{
        return  Number(sum)+Number(item.maxSpend)
    },0)
    const expenses=useSelector((state)=>state.expenses).reduce((sum,item)=>{
        return  Number(sum)+Number(item.curAmount)
    },0)

  return <div>
      {expenses!=0&&<BudgetCard curSpend={expenses} budgetName={"TotalExpenses"} maxSpend={budgets}></BudgetCard>}
  </div>;
}

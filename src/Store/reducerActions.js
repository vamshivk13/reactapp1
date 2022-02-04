const setMaxSpend=(payload)=>{
    return {
        type:'MaxSpend',
        payload
    }
}
const setBudgetName=(payload)=>{
    return {
        type:'BudgetName',
        payload
    }
}
const setExpenses=(payload)=>{
    return {
        type:'SetExpenses',
        payload
    }
}
const setExpenseAddToggle=()=>{
    return {
        type:'ExpenseAddToggle'
    }
}
const setBudget=(payload)=>{
return {
    type:'SetBudget',
    payload
}
}
const setBudgetAddToggle=()=>{
    return {
        type:'BudgetAddToggle'
    }
}
const setCurExpenseID=(payload)=>{
    return {
        type:'CurExpenseID',
        payload
    }
    }

const setViewExpenseToggle=()=>{
        return {
            type:'ViewExpenseToggle'
        }
}
    
const deleteExpense=(payload)=>{
    return {
        type:'DeleteExpense',
        payload
    }
}
    
const setRemoveExpense=(payload)=>{
    return {
        type:'RemoveExpense',
        payload
    }
}

export const reducerActions={setMaxSpend,setRemoveExpense,deleteExpense,setViewExpenseToggle,setExpenses,setBudgetName,setExpenseAddToggle,setBudget,setBudgetAddToggle,setCurExpenseID}
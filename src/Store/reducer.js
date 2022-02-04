import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage' 
const initialState={budgets:[],expenses:[],maxSpend:0,budgetName:'',viewExpenseToggle:false,expenseAddToggle:false,budgetAddToggle:false,curExpenseID:-1}

const reducer=(state={...initialState},action)=>{
    switch(action.type)
    {
        case 'MaxSpend':
            return {...state,maxSpend:action.payload}
        case 'BudgetName':
            return {...state,budgetName:action.payload}
        case 'ExpenseAddToggle':
            return {...state,expenseAddToggle:!state.expenseAddToggle}
        case 'BudgetAddToggle':
            return {...state,budgetAddToggle:!state.budgetAddToggle}
        case 'SetBudget':
            return {...state,budgets:[...state.budgets,action.payload]}
        case 'CurExpenseID':
            return {...state,curExpenseID:action.payload}
        case 'SetExpenses':
            return {...state,expenses:[...state.expenses,action.payload]}
        case 'ViewExpenseToggle':
            return {...state,viewExpenseToggle:!state.viewExpenseToggle}
        case 'DeleteExpense':
            return {...state,budgets:state.budgets.filter((item)=>item.id!=action.payload),
                expenses:state.expenses.filter((item)=>item.id!=action.payload)}
        case 'RemoveExpense':
            return {...state,expenses:state.expenses.filter((item)=>item.expId!=action.payload)}
        default:
            return state;
    }
}   

const persistConfig = {
    key: 'root',
    storage,
  }
const reducerPer = persistReducer(
    persistConfig,
    reducer
  );
  export default reducerPer



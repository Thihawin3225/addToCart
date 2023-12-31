import { createContext, useReducer } from "react";



const initialValue = {
    items: [],
    totalAmount : 0,
}

const itemReducer =(state,action)=> {
    if(action.type === "ADD"){
        const updateItem = state.items.concat(action.item);
        const uptotalAmount = state.totalAmount + action.item.amount * action.item.price;
        return (
            {
                items : updateItem,
                totalAmount : uptotalAmount
            }
        )
    }
    return initialValue;
}
export const ItemContext =createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  });
const ItemContextProvider = (props)=>{
    const [value,dispatch] = useReducer(itemReducer,initialValue)
    const addItemFun = (item)=> {
        dispatch({ type : "ADD" , item})
    }
    const removeItemFun =(id)=> {
        dispatch({type:"remove",id});
    }
    const itemCxt = {
        items: value.items,
        totalAmount: value.totalAmount,
        addItem: addItemFun,
        removeItem: removeItemFun,
    };
    return (
        <ItemContext.Provider value={itemCxt}>
            {props.children}
         </ItemContext.Provider>
    )
}
export default ItemContextProvider;


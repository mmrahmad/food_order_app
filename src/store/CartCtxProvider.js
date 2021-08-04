import {useReducer} from 'react'
import CartContext from './cart-context';

const defaultState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState
}


const CartCtxProvider = props => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultState);
    
    const addItemToCartHandler = (item) => {
        dispatch({type: 'ADD', item: item});
    }
    const removeItemFromCartHandler = (id) => {
        dispatch({type: 'REMOVE', id});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartCtxProvider;
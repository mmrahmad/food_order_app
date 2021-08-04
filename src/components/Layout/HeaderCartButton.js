import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const numberOfImtems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
console.log(cartCtx.items)
    return(
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfImtems}</span>
        </button>
    );
}
export default HeaderCartButton;
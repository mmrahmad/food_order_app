import React, {useContext, useState, useEffect} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const [btnIsHighlightd, setBtnIsHighlightd] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const {items} = cartCtx;
    const numberOfImtems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    const btnCaless = `${classes.button} ${btnIsHighlightd ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlightd(true);

        const timer = setTimeout(()=> {
            setBtnIsHighlightd(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return(
        <button className={btnCaless} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfImtems}</span>
        </button>
    );
}
export default HeaderCartButton;
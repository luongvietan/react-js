import React, { useReducer } from 'react';

//useReducer
// Định nghĩa action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        case REMOVE_FROM_CART:
            return state.filter((item, index) => index !== action.index);
        default:
            return state;
    }
};

// Component chính
const ShoppingCart = () => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addItem = (item) => {
        dispatch({ type: ADD_TO_CART, item });
    };

    const removeItem = (index) => {
        dispatch({ type: REMOVE_FROM_CART, index });
    };

    return (
        <div>
            <h2>Giỏ hàng</h2>
            <button onClick={() => addItem('Sản phẩm ' + (cart.length + 1))}>
                Thêm sản phẩm
            </button>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
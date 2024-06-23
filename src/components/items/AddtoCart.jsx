import React, {useState} from 'react';

function AddItem(props) {
    const [cart, setCart] = useState({});

    const addToCart = (itemId, quantity) => {
        setCart({
            ...cart,
            [itemId]: (cart[itemId] || 0) + quantity

        });

        props.onGistsArrayChange(cart)
        console.log("props", props.gistsArray)
    };

    return (
        <div>
            <button onClick={() => addToCart(1, 1)}>Add to cart</button>
        </div>
    );
}

export default AddItem;

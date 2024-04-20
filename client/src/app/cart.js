// Actions
export const addToCart = (item, id) => ({
  type: 'ADD_TO_CART',
  payload: { item, id }
});
export const removeFromCart = (productId) => ({ type: 'REMOVE_FROM_CART', payload: productId });

// Reducer
const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { item, id } = action.payload;
      const itemID = parseInt(id);
      const newItem = { ...item, amount: 1 };

      const cartItem = state.items.find(item => item.id === itemID);
      if (cartItem) {
        const newCart = state.items.map(item => {
          if (item.id === itemID) {
            return { ...item, amount: cartItem.amount + 1 };
          }
          return item;
        });

        return { ...state, items: newCart };
      } else {
        return { ...state, items: [...state.items, newItem] };
      }

    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
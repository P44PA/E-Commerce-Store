import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmount: 0,
    totalItems: 0,
    favorites: [],
  },
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) =>
          product.id === action.payload.id && product.size === action.payload.size
      );

      if (existingProduct) {
        const tempCart = state.data.map((product) => {
          if (product.id === action.payload.id && product.size === action.payload.size) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;

            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });

        state.data = tempCart;
      } else {
        state.data.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      }
      storeInLocalStorage("cart", state.data);
    },

    updateQuantity(state, action) {
      const { id, quantity, size } = action.payload;
      const productIndex = state.data.findIndex(
        (product) => product.id === id && product.size === size
      );

      if (productIndex !== -1) {
        const updatedProduct = {
          ...state.data[productIndex],
          quantity: Math.max(quantity || 1, 1),
        };

        updatedProduct.totalPrice =
          updatedProduct.price * updatedProduct.quantity;

        state.data[productIndex] = updatedProduct;
        storeInLocalStorage("cart", state.data);
      }
    },

    removeItem(state, action) {
      const { id, size } = action.payload;
      const tempCart = state.data.filter(
        (product) => product.id !== id || product.size !== size
      );
      state.data = tempCart;
      storeInLocalStorage("cart", state.data);
    },

    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.totalPrice;
      }, 0);
      state.totalItems = state.data.length;
    },


  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal, addToFavorites, removeFromFavorites } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { selectedPro, selectedSize, navigate } = action.payload;
      const { cartItems } = state;
      const existingProduct = cartItems.find(
        (item) => item.id === selectedPro.id
      );
      if (!existingProduct) {
        let temp = { ...selectedPro };
        temp.selectedSize = selectedSize;
        temp.quantity = 1;
        temp.itemTotalPrice = temp.price * temp.quantity;
        state.cartItems.push(temp);
        navigate("cart");
      } else {
        toast.info("Product already added to cart", { theme: "colored" });
      }
    },
    incDecQuantity(state, action) {
      let itemIndex;
      itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      switch (action.payload.type) {
        case "INC":
          if (itemIndex >= 0) {
            state.cartItems[itemIndex].quantity += 1;
            state.cartItems[itemIndex].itemTotalPrice =
              state.cartItems[itemIndex].price *
              state.cartItems[itemIndex].quantity;
          }
          break;
        default:
          if (itemIndex >= 0) {
            if (state.cartItems[itemIndex].quantity > 1) {
              state.cartItems[itemIndex].quantity -= 1;
              state.cartItems[itemIndex].itemTotalPrice =
                state.cartItems[itemIndex].price *
                state.cartItems[itemIndex].quantity;
            } else {
              let removedPro = state.cartItems.filter((value) => {
                return value.id !== action.payload.id;
              });
              state.cartItems = removedPro;
            }
          }
          break;
      }
    },
    removeFromCart(state, action) {
      const removedFromCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = removedFromCart;
    },
    getCartTotalAmount(state, action) {
      let cartTotalPrice = 0;
      cartTotalPrice = state.cartItems.reduce((acc, curr) => {
        return acc + curr.itemTotalPrice;
      }, 0);
      state.totalAmount = cartTotalPrice;
    },
    getCartTotal(state, action) {
      let quantity = 0;
      quantity = state.cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      state.totalQuantity = quantity;
      // return state.cartQuantityIs;
    },
  },
});

export const {
  addToCart,
  incDecQuantity,
  removeFromCart,
  getCartTotalAmount,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

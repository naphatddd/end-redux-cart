const ADD_TO_CART = 'app/cart/ADD_TO_CART'

function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
    },
  }
}

export { ADD_TO_CART, addToCart }

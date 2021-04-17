import { ADD_TO_CART } from './actions'

const initialState = {
  price: 0,
  productIds: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action.payload
      if (state.productIds.includes(productId)) return state
      return {
        ...state,
        productIds: [...state.productIds, productId],
      }
    default:
      return state
  }
}

export default reducer

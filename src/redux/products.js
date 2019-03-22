import * as ActionTypes from './ActionTypes'
const DEFAULT_STATE = { isLoading: true, errMess: null, products:[], selectedProducts: [], openModalAddProduct: false}

export const products = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case ActionTypes.ADD_PRODUCTS:
        return {...state, isLoading: false, errMess: null, products: action.payload}
      
      case ActionTypes.OPEN_MODAL_ADD_PRODUCT:
        return {...state, openModalAddProduct: !state.openModalAddProduct}

      case ActionTypes.ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload]
        }

      case ActionTypes.PRODUCTS_LOADING:
        return {...state, isLoading: true, errMess: null, products: []}

      case ActionTypes.PRODUCTS_FAILED:
        return {...state, isLoading: false, errMess: action.payload}

      case ActionTypes.SELECT_PRODUCT:
        return { ...state, selectedProducts: [...state.selectedProducts, action.product] }

      case ActionTypes.UNSELECT_PRODUCT:
      
        return {
          ...state,
          selectedProducts: [...state.selectedProducts.filter(p => p !== action.product)]
        }

      default:
        return state
    }
}
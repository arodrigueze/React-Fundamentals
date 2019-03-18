import * as ActionTypes from './ActionTypes'

import { MODALS } from '../const/Modal';

const DEFAULT_STATE = { isOpen: false, modal: MODALS.ADD_PRODUCT}

export const modals = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case ActionTypes.OPEN_MODAL_ADD_PRODUCT:
        return {...state, isOpen: true}

      default:
        return state
    }
}
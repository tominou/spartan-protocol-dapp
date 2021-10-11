import * as Types from './types'
import { payloadToDispatch, errorToDispatch } from '../helpers'

// --------------------------------------- GENERAL UTILS HELPERS ---------------------------------------

/**
 * UI HELPER -
 * Returns an navbar visibility status
 */
export const toggleNavbarVisibility = () => (dispatch) => {
  try {
    dispatch(payloadToDispatch(Types.TOGGLE_NAVBAR_VISIBILITY))
  } catch (error) {
    dispatch(errorToDispatch(Types.UI_ERROR, error))
  }
}

/**
 * UI HELPER -
 * Returns an navbar visibility status
 */
export const toggleTheme = () => (dispatch) => {
  try {
    dispatch(payloadToDispatch(Types.TOGGLE_THEME))
  } catch (error) {
    dispatch(errorToDispatch(Types.UI_ERROR, error))
  }
}

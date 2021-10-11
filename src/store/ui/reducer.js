import * as Types from './types'

const initialState = {
  theme: 'dark',
  navbarVisibility: false,
  error: null,
  loading: false,
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_NAVBAR_VISIBILITY: {
      return {
        ...state,
        navbarVisible: !state.navbarVisible,
        loading: false,
        error: null
      }
    }
    case Types.TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
        loading: false,
        error: null
      }
    }
    default:
      return state
  }
}

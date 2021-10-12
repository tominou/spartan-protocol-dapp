import * as Types from './types'

const initialState = {
  globalDetails: false,
  member: false,
  synthMinting: false,
  synthArray: false,
  synthDetails: false,
  txn: [],
  newSynth: {},
  totalWeight: '0',
}

export const synthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SYNTH_GLOBAL_DETAILS: {
      return {
        ...state,
        globalDetails: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_MEMBER_DETAILS: {
      return {
        ...state,
        member: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_MINTING: {
      return {
        ...state,
        synthMinting: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_ARRAY: {
      return {
        ...state,
        synthArray: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_DETAILS: {
      return {
        ...state,
        synthDetails: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_TXN: {
      return {
        ...state,
        txn: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_WEIGHT: {
      return {
        ...state,
        totalWeight: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SYNTH_LOADING: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }

    case Types.SYNTH_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    default:
      return state
  }
}

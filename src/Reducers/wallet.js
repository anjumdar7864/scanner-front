import {
    WALLET_ACCOUNT_SUCCESS,
    WALLET_ACCOUNT_ERROR,
  } from "../actions";

const initialState = {
    pending: false,
    walletdetails: [],
    error: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        
        case WALLET_ACCOUNT_SUCCESS:
            return {
                ...state,
                pending: false,
                walletdetails: action.payload.wallet
            }
        case WALLET_ACCOUNT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
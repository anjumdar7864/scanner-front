import {
    WALLET_ACCOUNT_SUCCESS,
    WALLET_ACCOUNT_ERROR,
  } from "../actions";

export const storeWallet = (data) => (dispatch) => {
    dispatch({
        type: WALLET_ACCOUNT_SUCCESS,
        payload: { wallet: data },
    });
  };
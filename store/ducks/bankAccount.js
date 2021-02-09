export const Types = {
  SET_ACCOUNT_DATA: 'BANK_ACCOUNT/SET_ACCOUNT_DATA',
  FETCH_ACCOUNT_DATA: 'BANK_ACCOUNT/FETCH_ACCOUNT_DATA',
  ERROR_ACCOUNT_DATA: 'BANK_ACCOUNT/ERROR_ACCOUNT_DATA',
  CLEAR_ACCOUNT_DATA: 'BANK_ACCOUNT/CLEAR_ACCOUNT_DATA',
  SET_TRANSACTION_DETAILS: 'BANK_ACCOUNT/SET_TRANSACTION_DETAILS',
  FETCH_TRANSACTION_DETAILS: 'BANK_ACCOUNT/FETCH_TRANSACTION_DETAILS',
  ERROR_TRANSACTION_DETAILS: 'BANK_ACCOUNT/ERROR_TRANSACTION_DETAILS',
  CLEAR_TRANSACTION_DETAILS: 'BANK_ACCOUNT/CLEAR_TRANSACTION_DETAILS',
};

const initialState = {
  accountData: [],
  loading: false,
  error: null,
};

export const fetchAccountData = (token) => ({
  type: Types.FETCH_ACCOUNT_DATA,
  token,
});

export const errorAccountData = (error) => ({
  type: Types.ERROR_ACCOUNT_DATA,
  error,
});

export const setAccountData = (accountData) => ({
  type: Types.SET_ACCOUNT_DATA,
  accountData,
});

export const clearAccountData = () => ({
  type: Types.CLEAR_ACCOUNT_DATA,
});

export const fetchTransactionDetails = (args) => ({
  type: Types.FETCH_TRANSACTION_DETAILS,
  args,
});

export const errorTransactionDetails = (error) => ({
  type: Types.ERROR_TRANSACTION_DETAILS,
  error,
});

export const setTransactionDetails = (transactionDetails) => ({
  type: Types.SET_TRANSACTION_DETAILS,
  transactionDetails,
});

export const clearTransactionDetails = () => ({
  type: Types.CLEAR_TRANSACTION_DETAILS,
});

const BankAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ACCOUNT_DATA:
      return { ...state, loading: true, error: null, };
    case Types.SET_ACCOUNT_DATA:
      return { ...state, accountData: action.accountData, loading: false, error: null };
    case Types.ERROR_ACCOUNT_DATA:
      return { ...state, loading: false, error: action.error };
    case Types.CLEAR_ACCOUNT_DATA:
      return { ...state, accountData: [] };

    case Types.FETCH_TRANSACTION_DETAILS:
      return { ...state, loading: true, error: null };
    case Types.SET_TRANSACTION_DETAILS:
      return { ...state, transactionDetails: action.transactionDetails, loading: false, error: null };
    case Types.ERROR_TRANSACTION_DETAILS:
      return { ...state, loading: false, error: action.error };
    case Types.CLEAR_TRANSACTION_DETAILS:
      return { ...state, transactionDetails: {} };
    default:
      return state;
  }
};

export default BankAccountReducer;

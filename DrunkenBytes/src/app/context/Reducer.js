export const initialLoggedInDetails = {
  isConnected: false,
  address: null,
};

export const reducer = (state, action) => {
  if (action.type === "UserLogin") {
    return {
      isConnected: true,
      address: action.payload.address
    };
  }
  if (action.type === "UserLogout") {
    return {
      isConnected: false,
      address: null,
    };
  }
};

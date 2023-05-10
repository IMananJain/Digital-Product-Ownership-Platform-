export const initialLoggedInDetails = {
  isLoggedIn: false,
  role: "",
};

export const reducer = (state, action) => {
  if (action.type === "UserLogin") {
    return {
      isLoggedIn: true,
      role: action.payload.role
    };
  }
  if (action.type === "UserLogout") {
    return {
      isLoggedIn: false
    };
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";

export const reducer = (state, action) => {
  console.log("ACTION ===>", action.type);
  console.log("STATE ===>", state);
  switch (action.type) {
    case "SIGNIN":
      AsyncStorage.setItem("accessToken", action?.payload?.data?.accessToken);
      AsyncStorage.setItem("xsrfToken", action?.payload?.data?.xsrfToken);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.accessToken,
        xsrfToken: action.payload.data.xsrfToken,
        isFetching: false,
      };
    case "LOGOUT":
      AsyncStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        xsrfToken: null,
        isFetching: false,
      };
    case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.accessToken,
        xsrfToken: action.payload.data.xsrfToken,
        isFetching: false,
      };
    case "NO_USER":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        xsrfToken: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

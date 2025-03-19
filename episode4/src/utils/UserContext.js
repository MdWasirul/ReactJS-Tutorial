import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: "Default User",
  setUserName: () => {}, // Placeholder function
});
export default UserContext;
 
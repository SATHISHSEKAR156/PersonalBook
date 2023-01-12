import { useContext } from "react";
import { UserContext } from "../contexts/userDataProvider";

const useAuth = () => useContext(UserContext);

export default useAuth;
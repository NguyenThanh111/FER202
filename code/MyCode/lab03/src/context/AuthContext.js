import { createContext } from "react";

// ponytail: default value is null so a component outside the provider fails
// loudly in useAuth instead of silently getting undefined state.
const AuthContext = createContext(null);

export default AuthContext;

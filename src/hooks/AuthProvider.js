import { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = () => {
    
    const [token, setToken] = useState(sessionStorage.getItem("site") || "");




}
import { useState } from "react"
import loginContext from "./loginContext";

const LoginState = (props)=>{
    const [toggleLogin, setToggleLogin] = useState(false);
    const [loginVisible, setLoginVisible] = useState(true);
    const [credentials, setCredentials] = useState({email: "", password: ""});
    return (
        <loginContext.Provider value={{toggleLogin, setToggleLogin, loginVisible, setLoginVisible, credentials, setCredentials}}>
            {props.children}
        </loginContext.Provider>
    )
}

export default LoginState;
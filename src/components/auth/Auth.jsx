import { useState } from "react"
import "./auth.css"
import Login from "./login/Login"
import Register from "./register/Register"
import { useAuth } from "../../provider/AuthProvider"
const Auth = () => {
    const [auth, setAuth] = useState("login")
    const { loading } = useAuth()
    return (
        <div className="auth_container">
            <div className="auth_title">
                <img src="./chat.png" alt="" />
                <h1>MedChat</h1>
            </div>
            <div className="auth">
                <div className="auth_btn">
                    <button disabled={loading} onClick={() => setAuth("login")} className={auth !== "login" && "btn_not_clicked"}>login</button>
                    <button disabled={loading} onClick={() => setAuth("sign-up")} className={auth !== "sign-up" && "btn_not_clicked"}>sign-up</button>
                </div>
                {auth === "login" ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default Auth
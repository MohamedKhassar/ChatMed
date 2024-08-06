import { useState } from "react"
import "./login.css"
import { useAuth } from "../../../provider/AuthProvider";
const Login = () => {
    const [isHidden, setIsHidden] = useState(true)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { signIn, loading } = useAuth();

    const sign_In = async () => {
        try {
            await signIn(user.email, user.password);
            console.log("User signed up successfully");
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    };
    return (
        <div className="login_container">
            <div className="login_input">
                <img src="./arroba.png" alt="" />
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" type="email" placeholder="email" readOnly={loading} />
            </div>
            <div className="login_input">
                <img onClick={() => { setIsHidden(!isHidden) }} src={isHidden ? "hidden.png" : "eye.png"} alt="" />
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" readOnly={loading} defaultValue="12345678" type={isHidden ? "password" : "text"} placeholder="password" />
            </div>
            <button disabled={loading} onClick={sign_In}>login <img className={loading && "spin"} src={!loading ? "./enter.png" : "./reload.png"} alt="" /></button>
        </div>
    )
}

export default Login
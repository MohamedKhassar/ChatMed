import { useState } from "react"
import "./login.css"
import { useAuth } from "../../../provider/AuthProvider";
const Login = () => {
    const [isHidden, setIsHidden] = useState(true)
    const [error, setError] = useState("")

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { signIn, loading } = useAuth();

    const sign_In = async () => {
        if (user.email, user.password) {
            try {
                await signIn(user.email, user.password);
            } catch (error) {
                console.error("Error signing in:", error.message);
            }
        } else {
            setError("Please fill all fields");
        }
    };
    return (
        <div className="login_container">
            <div className="login_input">
                <img src="./arroba.png" alt="" />
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" type="email" placeholder="email" readOnly={loading} className={error && "error_input"} />
            </div>
            <div className="login_input">
                <img onClick={() => { setIsHidden(!isHidden) }} src={isHidden ? "hidden.png" : "eye.png"} alt="" />
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" readOnly={loading} defaultValue="12345678" type={isHidden ? "password" : "text"} placeholder="password" className={error && "error_input"} />
            </div>
            {error &&
                <p className="error">{error}</p>
            }
            <button disabled={loading} onClick={sign_In}>login <img className={loading && "spin"} src={!loading ? "./enter.png" : "./reload.png"} alt="" /></button>
        </div>
    )
}

export default Login
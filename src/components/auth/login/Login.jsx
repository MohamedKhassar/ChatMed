import { useState } from "react"
import "./login.css"
const Login = () => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className="login_container">
            <div className="login_input">
                <img src="./arroba.png" alt="" />
                <input type="email" placeholder="email" />
            </div>
            <div className="login_input">
                <img onClick={() => { setIsHidden(!isHidden) }} src={isHidden ? "./hidden.png" : "./eye.png"} alt="" />
                <input type={isHidden ? "password" : "text"} placeholder="password" />
            </div>
            <button>login <img src="./enter.png" alt="" /></button>
        </div>
    )
}

export default Login
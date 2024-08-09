import { useState } from "react"
import "./register.css"
import { useAuth } from "../../../provider/AuthProvider"
const Register = () => {
    const [isHidden, setIsHidden] = useState(true)
    const [image, setImage] = useState()
    const [error, setError] = useState("")

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const { signUp, loading } = useAuth();
    const sign_Up = () => {
        try {
            if (user.username, user.email, user.password) {
                signUp(user.username, user.email, user.password, image);
                console.log("User signed up successfully");
            } else {
                setError("All fields are required")
            }
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };


    return (
        <div className="register_container">
            {image &&
                <label htmlFor="file">
                    <img className="avatar" src={URL.createObjectURL(image)} alt="" loading="lazy" />
                    <img className="edit-avatar" src="./editing.png" alt="" loading="lazy" />
                </label>
            }
            <div className="register_input">
                <input style={{ display: image && "none" }} type="file" id="file" onChange={(e) => e.target.files[0] && setImage(e.target.files[0])} accept=".png,.jpg,.jpeg" placeholder="username" className={error && "error_input"} />
            </div>
            <div className="register_input">
                <img src="./username.png" alt="" />
                <input name="username" onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" placeholder="username" className={error && "error_input"} />
            </div>
            <div className="register_input">
                <img src="./arroba.png" alt="" />
                <input name="email" readOnly={loading} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="email" className={error && "error_input"} />
            </div>
            <div className="register_input">
                <img name="password" readOnly={loading} onClick={() => { setIsHidden(!isHidden) }} src={isHidden ? "./hidden.png" : "./eye.png"} alt="" />
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} type={isHidden ? "password" : "text"} placeholder="password" className={error && "error_input"} />
            </div>
            {error &&
                <p className="error">{error}</p>
            }
            <button disabled={loading} style={{ cursor: loading && "not-allowed" }} onClick={sign_Up}>register <img className={loading && "spin"} src={!loading ? "./enter.png" : "./reload.png"} alt="" /></button>
        </div>
    )
}

export default Register
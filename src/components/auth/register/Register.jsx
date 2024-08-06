import { useState } from "react"
import "./register.css"
const Register = () => {
    const [isHidden, setIsHidden] = useState(true)
    const [image, setImage] = useState("")
    return (
        <div className="register_container">
            {image &&
                <label htmlFor="file">
                    <img className="avatar" src={URL.createObjectURL(image)} alt="" loading="lazy" />
                    <img className="edit-avatar" src="./editing.png" alt="" loading="lazy" />
                </label>
            }
            <div className="register_input">
                <input style={{ display: image && "none" }} type="file" id="file" onChange={(e) => e.target.files[0] && setImage(e.target.files[0])} accept=".png,.jpg,.jpeg" placeholder="username" />
            </div>
            <div className="register_input">
                <img src="./username.png" alt="" />
                <input type="text" placeholder="username" />
            </div>
            <div className="register_input">
                <img src="./arroba.png" alt="" />
                <input type="email" placeholder="email" />
            </div>
            <div className="register_input">
                <img onClick={() => { setIsHidden(!isHidden) }} src={isHidden ? "./hidden.png" : "./eye.png"} alt="" />
                <input type={isHidden ? "password" : "text"} placeholder="password" />
            </div>
            <button>register <img src="./enter.png" alt="" /></button>
        </div>
    )
}

export default Register
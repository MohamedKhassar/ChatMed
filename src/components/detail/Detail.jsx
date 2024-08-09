import { useAuth } from "../../provider/AuthProvider";
import "./detail.css"
const Detail = () => {
    const { logout, loading } = useAuth();
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor provident ut.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" alt="" />
                                <span>photo-1488590528505-98d2b5aba04b.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" alt="" />
                                <span>photo-1488590528505-98d2b5aba04b.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" alt="" />
                                <span>photo-1488590528505-98d2b5aba04b.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" alt="" />
                                <span>photo-1488590528505-98d2b5aba04b.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button onClick={logout} className="logout">{loading ? <img src="./reload.png" alt="" /> : "Logout"}</button>
            </div>
        </div>
    )
}

export default Detail
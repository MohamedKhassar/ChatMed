import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/AddUser"
const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="search" name="" placeholder="Search" id="" />
                </div>
                <img onClick={() => setAddMode(!addMode)} src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" />
            </div>
            <div className="items">
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
            {addMode && <AddUser />}
        </div>
    )
}

export default ChatList
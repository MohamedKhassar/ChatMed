import EmojiPicker from "emoji-picker-react"
import "./chat.css"
import { useEffect, useState } from "react";
import { useRef } from "react";
const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("")
    const endRef = useRef(null)
    const ref = useRef(null)
    const handelEmoji = (e) => {
        setText(prev => prev += e.emoji)
    }

    const detectClickOutSide = (e) => {
        if (ref.current && !ref.current.contains(e.target) && open) {
            setOpen(false)
        }
    }

    window.addEventListener('mousedown', detectClickOutSide)

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jan Doe</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sunt?</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit corrupti unde qui placeat blanditiis nam ratione nostrum veniam aliquid!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}>

                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
                <div className="emoji" ref={ref}>
                    <img onClick={() => { setOpen(!open) }} src="./emoji.png" alt="" />
                    <div className="picker">
                        <EmojiPicker open={open} className="" onEmojiClick={handelEmoji} lazyLoadEmojis={true} theme="auto" autoFocusSearch={false} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat
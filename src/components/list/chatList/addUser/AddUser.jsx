import "./addUser.css"
const AddUser = () => {
    return (
        <div className="add_container">
            <div className="search_user">
                <input type="text" placeholder="Enter name" />
                <button>search</button>
            </div>
            <div className="search_items">
                <div className="user_name">
                    <img src="./avatar.png" alt="" />
                    <h2>jane doe</h2>
                </div>
                <button className="add_btn">add user</button>
            </div>
        </div>
    )
}

export default AddUser
import Auth from "./components/auth/Auth"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import { useAuth } from "./provider/AuthProvider";

const App = () => {
  const { currentUser, loading } = useAuth();
  console.log(currentUser, loading)
  return (
    <>
      {currentUser ? <div className="container">
        <List />
        <Chat />
        <Detail />
      </div >
        :
        <Auth />
      }
    </>
  )
}

export default App
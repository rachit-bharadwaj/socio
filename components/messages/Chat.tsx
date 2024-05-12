import ChatBox from "@/templates/messages/ChatBox"
import { CiSearch } from "react-icons/ci"

const Chat = () => {
  return (
    <div className="m-3">
        <div className="flex gap-5 border px-5 py-2 rounded-full my-5">
        <input
          type="text"
          placeholder="Who do you want to chat with?"
          className="bg-transparent flex-1 truncate "
        />
        <CiSearch className="text-2xl" />
        </div>
        <div>
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
           <ChatBox name="Mili Srivastava" profileImg="/images/mili-user.jpeg" lastMessage="Hello! how are you?" timestamp="20 min ago" />
        </div>
    </div>
  )
}

export default Chat
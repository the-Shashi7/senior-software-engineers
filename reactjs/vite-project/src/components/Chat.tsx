import React , { useState } from 'react'

const Chat = () => {
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState<string[]>([]);

    const handleSendMessage = () => {
        setMessages([...messages,message]);
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const connectToServer = () => {
        const socket = new WebSocket("ws://localhost:3000");
    }


  return <>
    <div>
        <input type="text" value={message} onChange={handleMessageChange} />
        <button onClick={handleSendMessage}>Send</button>
    </div>
    <div>
        {messages.map((message: string,index: number) => (
            <div key={index}>{message}</div>
        ))}
    </div>
  </>
}

export default Chat
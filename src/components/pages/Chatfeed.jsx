import React from 'react'
import Message from './Message';
import Mymessage from './Mymessage'
import Othermessage from './Othermessage'

const Chatfeed = (props) => {
    //  dstructuring the props
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    
    const renderReadReceipt=(message,isMymessage)=>{
        console.log(message)
             return chat.people.map((person,index)=>person.last_read===message.id && (
                <div
                  key={`read_${index}`}
                  className='read-receipt'
                  style={{
                    float:isMymessage? "right":"left",
                    backgroundImage:`url( ${person?.person?.avatar})`
                  }}
                
                
                />

             ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        console.log(keys);

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMymessage = userName === message.sender.username;

            return (
                <div key={`msg${index}`} style={{ width: "100%" }}>
                    <div className='message-block'>
                        {
                            isMymessage ? <Mymessage message={message} /> : <Othermessage message={message} lastMessage={messages[lastMessageKey]} />
                        }

                    </div>

                    <div className='read-receipts' style={{ marginRight: isMymessage ? '18px' : '0px', marginLeft: isMymessage ? '0px' : '68px' }}>
                        {
                            renderReadReceipt(message,isMymessage)
                        }
                    </div>
                </div>
            )
        })

    }
    renderMessages()

    if (!chats) return 'Loading...'

    return (
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chats?.title}</div>
                <div className="chat-subtitle">
                    {
                        chat.people.map((person) => ` ${person.person.username}`)
                    }
                </div>

            </div>
            {renderMessages()}
            <div style={{ height: "100px" }} />

            <div className="message-form-container">
                <Message {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default Chatfeed
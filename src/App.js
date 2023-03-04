import React from 'react'
import './App.css'
import {ChatEngine} from 'react-chat-engine'
import Chatfeed from './components/pages/Chatfeed'
import Loginform from './components/pages/Loginform'

const App = () => {

  if(!localStorage.getItem('username')) return <Loginform/>
  return (
    <ChatEngine
    height="100vh"
    projectID="4f8b1f3a-4d1b-41c4-a451-05386cdb4d1c"
    userName={localStorage.getItem("username")}
    userSecret={localStorage.getItem("password")}
    renderChatFeed={(chatAppProps)=><Chatfeed {...chatAppProps}/>}
    />
  )
}

export default App
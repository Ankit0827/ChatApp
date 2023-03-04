import axios from 'axios';
import React,{useState} from 'react'

const Loginform = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const outhObject={"Project-Id":"4f8b1f3a-4d1b-41c4-a451-05386cdb4d1c","User-Name":username,"User-Secret":password}

        try{
           await axios.get("https://api.chatengine.io/chats",{ headers : outhObject })

           localStorage.setItem('username',username)
           localStorage.setItem('password',password)

           window.location.reload()
        } catch(error){
               setError("Incorrect Username or Passsword...")
        }

    }
  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className='title'>Pirate</h1>
             <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
                <div align="center">
                <button type='submit' className='button'>
                      <span>Start Chatting</span>
                </button>
                </div>
                <h3 style={{
                  paddingLeft:"2rem"
                }}>{error}</h3>
             </form>
        </div>
    </div>
  )
}

export default Loginform

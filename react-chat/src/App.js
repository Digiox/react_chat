
import React, { Component } from 'react'
import './App.css';
import io from "socket.io-client"
import LoginPage from "./components/LoginComponent/Login";
import Chat from "./components/ChatComponent/Chat"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      socket: io("http://5.51.42.34:3500"),
      userName: "undefined",
     
    }
  }

 
 
  render() {
   
    this.state.socket.on("connectionMessage", (data) => {console.log(data);
      this.setState({messageList: data.messageList, userList: data.userList
      })
      
    })
    if (this.state.userName === "undefined") {
      return (
        <div>
          <LoginPage  name={(userName) => {console.log("validated"); this.state.socket.emit("userName", userName); this.setState({userName}); 
          }} socket={this.state.socket} />
        </div>
      )
    }
    else {
      return <Chat socket={this.state.socket} userName={this.state.userName} />
    }
  }
}


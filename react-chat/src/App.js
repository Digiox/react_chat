
import React, { Component } from 'react'
import './App.css';
import io from "socket.io-client"
import LoginPage from "./components/LoginComponent/Login";
import Chat from "./components/ChatComponent/Chat"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      socket: io("http://localhost:3500"),
      userName: "undefined"
    }
  }

  componentDidMount(){
   
    this.state.socket.on("connectionMessage", (data) => {console.log(data);
    })
  }
  componentWillUnmount(){
    
  }
  render() {
    if (this.state.userName === "undefined") {
      return (
        <div>
          <LoginPage name={(userName) => {console.log("validated"); this.setState({userName}); 
          }} socket={this.state.socket} />
        </div>
      )
    }
    else {
      return <Chat userName={this.state.userName} />
    }
  }
}


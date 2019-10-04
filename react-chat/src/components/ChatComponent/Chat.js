import React, { Component } from 'react'
import '../../App.css'
import { Button, Form, Comment } from 'semantic-ui-react'
import faker from "faker"
import id from "uniqid"
import format from "date-format"

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: {onlineUsers: []},
            avatar: faker.image.avatar(),
            userName: this.props.userName,
            message: "",
            messageList: []
        }

    }

    componentDidMount() {
        this.props.socket.emit("requestUserList", { requestUserList: true })
        this.setState({userList: {onlineUsers: [{userName: this.state.userName}]}})
        this.props.socket.emit("requestMessageList", { requestMessageList: true })

    }


    listenForChanges = () => {
        this.props.socket.on("userList", (userList) => { this.setState({ userList }) })
        this.props.socket.on("messageList", (messageList) => {
            console.log("new message list" + JSON.stringify(messageList.messageHistory));
            if (this.state.messageList !== messageList.messageHistory) {
                this.setState({ messageList: messageList.messageHistory })
            }
        })
    }
    addMessage = () => {
        const newId = id()
        const array = this.state.messageList;
        const mess = {
            messageId: newId,
            message: this.state.message,
            author: this.state.userName,
            date: weekday[new Date().getDay()] + " at " + format('hh:mm', new Date()),
            avatar: this.state.avatar
        }
        array.push(
            mess
        )
        this.props.socket.emit("newMessage", mess)
        this.setState({ messageList: array })

    }

    render() {
        this.listenForChanges()

        return (
            <div className="chatComponent">
                <h1>Cool chat</h1>
                <div className=" mainSection">
                    <div className="userList">
                    {this.state.userList.onlineUsers.map(item => (<h3>{item.userName}</h3>))}
                    </div>
                    <div className="chatPart">

                        <div className="chatContainer">
                            <Comment.Group  >
                                {this.state.messageList.map((item, i) => (
                                    <Comment key={i} className="chat">
                                        <Comment.Avatar src={item.avatar} />
                                        <Comment.Content>
                                            <Comment.Author as='a'>{item.author}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>{item.date}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>{item.message}</Comment.Text>
                                            <Comment.Actions>

                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                ))}

                            </Comment.Group>
                        </div>



                        <div className="fixedBottom">
                            <Form >
                                <Form.Group inline>
                                    <input onChange={(e) => { this.setState({ message: e.target.value }) }} placeholder="Your message here..." />
                                    <Button onClick={() => this.addMessage()} color='green' type='submit'>SEND</Button>
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

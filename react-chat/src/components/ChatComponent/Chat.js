import React, { Component } from 'react'
import '../../App.css'
import { Button, Form, Comment, Header } from 'semantic-ui-react'
import faker from "faker"

export default class Chat extends Component {
    render() {
        return (
            <div className="chatComponent">
                <h1>Cool chat</h1>
                <div className="chatPart">
                   
                   <Comment.Group className="chatContainer" >
                       
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                       <Comment className="chat">
                           <Comment.Avatar src={faker.image.avatar()} />
                           <Comment.Content>
                               <Comment.Author as='a'>{faker.name.findName()}</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                   </Comment.Group>
                 

                    <div className="fixedBottom">
                        <Form >
                            <Form.Group inline>
                                <input placeholder="Your message here..." />
                                <Button onClick={() => this.validatedUserName()} color='green' type='submit'>SEND</Button>
                            </Form.Group>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

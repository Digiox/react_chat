import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../../App.css'

export default class Login extends Component {
    constructor()
    {
        super();
        this.state = {
            nickName: ""
        }
    }
    handlename = (event) => {
        this.setState({nickName: event.target.value})
    }
    validatedUserName = () => {
        this.props.name(this.state.nickName)
    }
    render() {
        return (
            <div className="loginPage">
                <h1 className="loginTitle">Cool chat</h1>
                <div className="loginSection">
                
                <Form size={'large'}>
   <Form.Field>
     <label>Choice your nickname</label>
     <input onChange={(e) => {this.handlename(e)}} placeholder='Nickname' />
   </Form.Field>
   
   <Button onClick={() => this.validatedUserName()} color='green' type='submit'>Continue</Button>
 </Form>
           </div>
            </div>
            
        )
    }
}

import React, { FormEvent } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

type LoginState ={
    email: string,
    password: string,
}

type LoginProps ={
    message?: string,
    updateToken: Function,

}



class Login extends React.Component <LoginProps, LoginState>  {
    constructor(props: LoginProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch('http://localhost:3000/user/login',{
            method:'POST',
            body: JSON.stringify({user: {email: this.state.email, password: this.state.password }}),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then((res)=>res.json())
        .then((data)=>{
            this.props.updateToken(data.sessionToken)
            // window.location.replace('http://localhost:3002/home')
            console.log(this.state.email, this.state.password)
        })
    }


    render() {
        return(
            <div>
                <h1>Login</h1>
                <Form onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                         name="email" 
                         validators={['required', 'isEmail']}
                         errorMessages={['This field is required', 'email is not valid']}
                         onChange={(e)=>this.setState({email: e.target.value})} 
                         value={this.state.email}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login;

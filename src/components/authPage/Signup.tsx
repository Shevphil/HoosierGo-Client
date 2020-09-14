import React, { FormEvent } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

type SignupState = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    profilePic: string,
    bio: string,
}

type SignupProps = {
    message?: string,
    updateToken: Function
}

class Signup extends React.Component <SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: '', 
            profilePic: '',
            bio:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch('http://localhost:3000/user/create', {
            method:'POST',
            body: JSON.stringify({user: {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, profilePic: this.state.profilePic, bio: this.state.bio }}),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then((res)=>res.json())
        .then((data)=>{
            this.props.updateToken(data.sessionToken)
            // window.location.replace('http://localhost:3002/home')
        })
    }

    render(){
    return(
        <div>
            <h1>Signup</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name="firstName" onChange={(e)=>this.setState({firstName: e.target.value})} value={this.state.firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="lastName" onChange={(e)=>this.setState({lastName: e.target.value})} value={this.state.lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" onChange={(e)=>this.setState({email: e.target.value})} placeholder="john@email.com" value={this.state.email}/>
                </FormGroup>
                 <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="profilePic">Profile Picture</Label>
                    <Input name="profilePic" onChange={(e)=>this.setState({profilePic: e.target.value})} value={this.state.profilePic}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bio">Bio</Label>
                    <Input name="bio" onChange={(e)=>this.setState({bio: e.target.value})} value={this.state.bio}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}
}

export default Signup;


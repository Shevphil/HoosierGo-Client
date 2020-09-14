import React, { FormEvent } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
type CreateState = {
    location: string,
    content: string,
    contentImage: string
}
type CreateProps = {
    token: string,
    fetchAllPosts: Function,
}
class PostCreate extends React.Component<CreateProps, CreateState>{
    constructor(props: CreateProps){
        super(props);
        this.state = {
            location: '',
            content: '',
            contentImage: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    //function components here
    submitHandler(event: FormEvent) {
        event.preventDefault();
        fetch('http://localhost:3000/posts/create', {
            method: 'POST',
            body: JSON.stringify({
                post: {
                    location: this.state.location,
                    content: this.state.content,
                    contentImage: this.state.contentImage 
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.token,
            })
        })
        .then((response) => response.json())
        .then(() => {
            this.props.fetchAllPosts();
        })
    }
    
    render(){
        return(
            <div>
                <h1>Create a new Post!</h1>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label htmlFor="location">Where are you?</Label>
                        <Input 
                        name="location"
                        onChange={(e) => this.setState({ location: e.target.value })}
                        value={this.state.location} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content">What would you like to say?</Label>
                        <Input  
                        name="content"
                        onChange={(e) => this.setState({ content: e.target.value })}
                        value={this.state.content} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contentImage">Like to upload an image?</Label>
                        <Input 
                        name="contentImage"
                        onChange={(e) => this.setState({ contentImage: e.target.value })}
                        value={this.state.contentImage} 
                        />
                    </FormGroup>
                    <Button type='submit'>Post!</Button>
                </Form>
            </div>
        )
    }
}
export default PostCreate;
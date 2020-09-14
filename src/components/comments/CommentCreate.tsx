import React, { FormEvent } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
//Need to pass into here the id of the post
type CreateState = {
    comment: string
}
type CreateProps = {
    token: string,
    apostId: number,
    commentOff: Function
}
class CommentCreate extends React.Component<CreateProps, CreateState>{
    constructor(props: CreateProps){
        super(props);
        this.state = {
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Component Functions here
    handleSubmit(event: FormEvent) {
        event.preventDefault();
        fetch('http://localhost:3000/comments/create', {
            method: 'POST',
            body: JSON.stringify({comment: {comment: this.state.comment, apostId: this.props.apostId}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.token
            })
        })
        .then(() => this.props.commentOff())
    }
    
    render(){
        return(
            <div>
                <h1>Create your Comment</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="comment">Comment:</Label>
                        <Input
                        name="comment"
                        value={this.state.comment}
                        onChange={(e) => this.setState({comment: e.target.value})} 
                        />
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
            </div>
        )
    }
}
export default CommentCreate;
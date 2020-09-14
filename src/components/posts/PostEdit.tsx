import React, { FormEvent } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Post from '../types/Post';
type EditState = {
    editLocation: string,
    editContent: string,
    editContentImage: string | undefined
}
type EditProps = {
    token: string,
    postToUpdate: Post,
    updateOff: Function,
    fetchAllPosts: Function,
    fetchMyPosts: Function
}
class PostEdit extends React.Component<EditProps, EditState>{
    constructor(props: EditProps){
        super(props);
        this.state = {
            editLocation: this.props.postToUpdate.location,
            editContent: this.props.postToUpdate.content,
            editContentImage: this.props.postToUpdate.contentImage
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.updateRequest = this.updateRequest.bind(this);
    }
    //Function components here
    submitHandler(event: FormEvent) {
        event.preventDefault();
        this.updateRequest(this.props.postToUpdate.id)
    }
    updateRequest(id: number) {
        fetch(`http://localhost:3000/posts/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                post: {
                    location: this.state.editLocation,
                    content: this.state.editContent,
                    contentImage: this.state.editContentImage
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.token
            })
        })
        .then((res) => {
            this.props.fetchAllPosts();
            this.props.fetchMyPosts();
            this.props.updateOff();
        })
    }
    render(){
        return(
            <div>
                <Modal>
                    <ModalHeader>Update Your Post</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label htmlFor="location">Update your location?</Label>
                        <Input 
                        name="location"
                        onChange={(e) => this.setState({ editLocation: e.target.value })}
                        value={this.state.editLocation} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content">What would you like to say?</Label>
                        <Input  
                        name="content"
                        onChange={(e) => this.setState({ editContent: e.target.value })}
                        value={this.state.editContent} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contentImage">Like to update your image?</Label>
                        <Input 
                        name="contentImage"
                        onChange={(e) => this.setState({ editContentImage: e.target.value })}
                        value={this.state.editContentImage} 
                        />
                    </FormGroup>
                    <Button type='submit'>Update!</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default PostEdit;
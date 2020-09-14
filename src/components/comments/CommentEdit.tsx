import React, {FormEvent} from 'react';
import Comment from '../types/Comment';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
type EditState = {
    editComment: string
}
type EditProps = {
    token: string,
    fetchComments: Function,
    updateOff: Function,
    commentToUpdate: Comment,
}
class CommentEdit extends React.Component<EditProps, EditState>{
    constructor(props: EditProps){
        super(props);
    }
    //component functions here
    submitHandler(event: FormEvent) {
        event.preventDefault();
        this.updateRequest(this.props.commentToUpdate.id)
    }
    updateRequest(id: number) {
        fetch(`http://localhost:3000/comments/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment: {
                    comment: this.state.editComment,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.token
            })
        })
        .then((res) => {
            this.props.fetchComments();
            this.props.updateOff();
        })
    }
    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update Your Comment</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label htmlFor="comment">Update your comment?</Label>
                        <Input 
                        name="comment"
                        onChange={(e) => this.setState({ editComment: e.target.value })}
                        value={this.state.editComment} 
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
export default CommentEdit;
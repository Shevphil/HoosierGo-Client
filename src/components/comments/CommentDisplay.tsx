import React from 'react';
import Comment from '../types/Comment';
import {Button} from 'reactstrap';
import CommentEdit from './CommentEdit';
type DisplayState = {
    commentToUpdate: Comment | null
}
type DisplayProps = {
    token: string,
    viewOff: Function,
    fetchComments: Function,
    comments: Comment[]
}
class CommentDisplay extends React.Component<DisplayProps, DisplayState>{
    constructor(props: DisplayProps){
        super(props);
        this.state= {
            commentToUpdate: null
        }
    }
    //component functions
    commentDelete(id: number) {
        fetch(`http://localhost:3000/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.token
            })
        })
        .then(() => this.props.fetchComments())
    }
    changeUpdateComment(comment: Comment) {
        this.setState({
            commentToUpdate: comment
        })
    }
    commentWrapper() {
        return this.props.comments.map((comment, index) => {
            return(
                <div key={index}>
                <h4>{comment.firstName}</h4>
                <p>{comment.comment}</p>
                <br/>
                <Button color='warning' onClick={() => this.changeUpdateComment(comment)}>Edit</Button>
                <Button color='danger' onClick={()=> this.commentDelete(comment.id)}>Delete</Button>
                <hr/>
                </div>
            )
        })
    }
    render(){
        return(
            <>
            <div>
                <Button onClick={this.props.viewOff()}>Close</Button>
                {this.commentWrapper()}
            </div>
            {this.state.commentToUpdate ?
            <CommentEdit token={this.props.token} commentToUpdate={this.state.commentToUpdate} updateOff={() => this.setState({commentToUpdate: null})} fetchComments={this.props.fetchComments} /> : <></>}
            </>
        )
    }
}
export default CommentDisplay;
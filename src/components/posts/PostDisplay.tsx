//TODO:
//Write up display for posts so that they are rendered as card
    //posts need user's profImg if it exists
    //User firstName then lastName
    //post content
    //button for commenting
    //button for editing
    //button for deleting
    //edit/delete button should only be visible if user is owner
    import React from 'react';
    import Post from '../types/Post';
    import Comment from '../types/Comment';
    import PostEdit from './PostEdit';
    import { Card, CardBody, CardText, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap';
    import CommentDisplay from '../comments/CommentDisplay';
    import CommentCreate from '../comments/CommentCreate'
    type DisplayState = {
        updateActive: boolean,
        postToUpdate: Post | null,
        publicDisplay: boolean,
        viewComments: boolean,
        createComment: boolean
    }
    type DisplayProps = {
        token: string,
        fetchAllPosts: Function,
        fetchMyPosts: Function,
        allPosts: Post[],
        myPosts: Post[],
        comments: Comment[],
        fetchComments: Function
    }
    class PostDisplay extends React.Component<DisplayProps, DisplayState> {
        constructor(props: DisplayProps) {
            super(props);
            this.state = {
                updateActive: false,
                postToUpdate: null,
                publicDisplay: true,
                viewComments: false,
                createComment: false
            }
            this.deletePost = this.deletePost.bind(this)
            this.togglePublic = this.togglePublic.bind(this)
            this.postsMapper = this.postsMapper.bind(this)
            this.editUpdatePost = this.editUpdatePost.bind(this)
        }
        //Function Components here
        deletePost(id: number) {
            fetch(``, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.token
                })
            })
            .then(() => {
                this.props.fetchAllPosts();
                this.props.fetchMyPosts();
            })
        }
        togglePublic() {
            this.setState({
                publicDisplay: !(this.state.publicDisplay)
            })
        }
        postsMapper(posts: Post[]) {
            return posts.map((post, index) => {
                return(
                    <Card key={index}>
                        <CardTitle>{post.firstName} {post.lastName}</CardTitle>
                        <CardSubtitle>{post.location}</CardSubtitle>
                        <CardImg src={post.contentImage}></CardImg>
                        <CardBody>
                            <CardText>{post.content}</CardText>
                        </CardBody>
                        <Button onClick={() => {this.setState({viewComments: true})}}>View Comments</Button>
                        <Button onClick={() => {this.setState({createComment: true})}}>Create Comment</Button>
                        <br/>
                        {(this.state.publicDisplay) ?
                        <></> : 
                        <div><Button color="warning" onClick={() => {this.editUpdatePost(post)}}>Edit</Button>
                        <Button color="danger" onClick={() => {this.deletePost(post.id)}}>Delete</Button></div>}
                        {(this.state.viewComments) ? <CommentDisplay viewOff={() => this.setState({viewComments: false})} token={this.props.token} fetchComments={this.props.fetchComments} comments={this.props.comments} /> :
                        <></>}
                        {(this.state.createComment) ?
                        <CommentCreate token={this.props.token} apostId={post.id} commentOff={() => this.setState({createComment: false})} /> :
                        <></>}
                    </Card>
                )
            })
        }
        editUpdatePost(post: Post) {
            this.setState({
                postToUpdate: post
            })
        }
        render(){
            return(
                <>
                <Button>{(this.state.publicDisplay) ? 'Mine' : 'Public'}</Button>
                {(this.state.publicDisplay) ? 
                <div>
                <h1>Check out these Posts</h1>
                {this.postsMapper(this.props.allPosts)}
                </div> :
                <div>
                <h1>Check out your Posts</h1>
                {this.postsMapper(this.props.myPosts)}
                </div>
            }
                {this.state.postToUpdate ? <PostEdit token={this.props.token} postToUpdate={this.state.postToUpdate} fetchAllPosts={this.props.fetchAllPosts} fetchMyPosts={this.props.fetchMyPosts} updateOff={() => this.setState({postToUpdate: null})} /> : <></>}
                </>
            )
        }
    }
    export default PostDisplay;
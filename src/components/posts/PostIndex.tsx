import React from 'react';
import Post from '../types/Post';
import PostCreate from './PostCreate';
import PostDisplay from './PostDisplay';
import Comment from '../types/Comment';
type PostState = {
    simpleToken: string,
    allPosts: Post[],
    myPosts: Post[],
    comments: Comment[]
}
type PostProps = {
    token: string | null
}
class PostIndex extends React.Component<PostProps, PostState>{
    constructor(props: PostProps){
        super(props)
        this.state = {
            simpleToken: '',
            allPosts: [],
            myPosts: [],
            comments: []
        }
        
        this.fetchAllPosts = this.fetchAllPosts.bind(this)
        this.fetchMyPosts = this.fetchMyPosts.bind(this)
        this.fetchComments = this.fetchComments.bind(this)
    }
    
    tokenizer() {
        if(this.props.token != null){
            this.setState({
                simpleToken: this.props.token
            })
            console.log(this.props.token, this.state.simpleToken)
        }
    }
    fetchAllPosts() {
        fetch('http://localhost:3000/posts/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then((response) => response.json())
        .then((postData) => {
            this.setState({
                allPosts: postData
            })
            console.log('fetchAll hit', this.state.allPosts)
        })
    }
    fetchMyPosts() {
        fetch('http://localhost:3000/posts/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization : this.state.simpleToken
            }),
        })
        .then((response) => response.json())
        .then((postData) => {
            this.setState({
                myPosts: postData
            })
            console.log('fetchMine hit', this.state.myPosts)
        })
    }
    fetchComments(apostId: number) {
        fetch('http://localhost:3000/comments/onpost/all', {
            method: 'GET',
            body: JSON.stringify({
                comment: {
                    apostId: apostId
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.state.simpleToken
            })
        })
        .then((response) => response.json())
        .then((commentData) => {
            this.setState({
                comments: commentData
            })

        })
    }
    componentWillMount(){
        this.tokenizer();
        this.fetchAllPosts();
        
    }

    componentDidMount(){
        this.fetchMyPosts();
    }
    render(){
        return(
            <div>
                <PostCreate token={this.state.simpleToken} fetchAllPosts={this.fetchAllPosts} />
                <PostDisplay token={this.state.simpleToken} fetchAllPosts={this.fetchAllPosts} fetchMyPosts={this.fetchMyPosts} allPosts={this.state.allPosts} myPosts={this.state.myPosts} comments={this.state.comments} fetchComments={this.fetchComments} />
            </div>
        )
    }
}
export default PostIndex;
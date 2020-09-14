import React from 'react';
import {Row, Col, Container, } from 'reactstrap';



class Posts extends React.Component {


    render(){
        return (
            <div className="row">
             <div className="leftcolumn">
                <div className="card">
                    <h2>First Public Post</h2>
                    <h5>Had a blast at the IU tailgate!</h5>
                    <div className="fakeimg">Image</div>
                    <p>Some text..</p>
                </div>
                 <div className="card">
                    <h2>Second Public Post</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg" >Image</div>
                    <p>Some text..</p>
                 </div>
             </div>
             <div className="rightcolumn">
                <div className="card">
                    <h2>Profile</h2>
                    <div className="fakeimg">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className="card">
                <h3>Popular Posts</h3>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                </div>
                <div className="card">
                    <h3>Btown Twitter Feed</h3>
                    <p>Live Twitter Feed Here</p>
                </div>
            </div>
        </div>  
        )
    }
}

export default Posts;
import React from 'react';

class Alerts extends React.Component {


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
                    <h2>About Me</h2>
                    <div className="fakeimg">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className="card">
                <h3>Popular Post</h3>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                </div>
                <div className="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
    </div>
</div>  
        )
    }
}

export default Alerts;
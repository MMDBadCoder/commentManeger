import React from 'react'
import Comment from './Comment'
class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {        
        return (
            <ul id="comments-list" className="comments-list">
                {this.state.comments.map(function (comment, i) {
                    return (
                        <li>
                            <Comment content={comment.content} head = {comment.head} replys = {comment.replys}/>
                        </li>
                    );
                })}
            </ul>
        )
    }
}


export default CommentList
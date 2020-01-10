import React from 'react'
import CommentBox from './CommentBox';

class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            head: props.head,
            replys : props.replys,
        }
    }

    render() {

        return (
            <div classNameName='all-comment-pack'>
                <div className="comment-avatar"><img
                    src={this.state.head.writer.imgSrc} alt="" />
                </div>
                <CommentBox content={this.state.content} head={this.state.head} isReply = {true}/>
            </div>
        )

    }
}

export default Reply
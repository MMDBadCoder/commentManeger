import React from 'react'
import ReplyList from './ReplyList'
import CommentBox from './CommentBox'
class Comment extends React.Component {
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
            <div className='all-comment-pack'>
                <div className="comment-main-level">
                    <div className="comment-avatar">
                        <img src={this.state.head.writer.imgSrc} alt="" />
                    </div>
                    <CommentBox content={this.state.content} head={this.state.head} />
                </div>
                <ReplyList replys={this.state.replys} />
            </div>

        )
    }
}

export default Comment
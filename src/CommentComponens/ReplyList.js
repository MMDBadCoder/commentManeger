import React from 'react'
import Reply from './Reply'

class ReplyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replys : props.replys,
        }



    }

    render() {
        return (
            <ul className="comments-list reply-list ">
                <li>
                    {this.state.replys.map(function (reply, i) {
                        return (
                            <li>
                                <Reply content={reply.content} head = {reply.head} replys = {reply.replys}/>
                            </li>
                        );
                    })}

                </li>
            </ul>
        );
    }
}

export default ReplyList
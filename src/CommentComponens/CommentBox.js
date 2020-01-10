import React from 'react'
// import FroalaComment from './FroalaComment';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isReply: props.isReply,
            liked: props.head.liked,
            date: props.head.date,
            writer: props.head.writer,
            text: props.content.text,
            id: props.head.id,
            like_count: props.head.like_count,
            edit: props.head.edit,
            can_edit: props.head.can_edit,
        }
        this.last_edited_text = this.state.text;
    }

    submit() {
        this.setState({
            edit: false
        });
    }

    edit_text() {
        this.last_edited_text = this.state.text;
        this.setState((prevState) => ({ edit: true }));
    }

    trash() {
        window.location.reload();
    }

    like() {
        if (this.state.liked) {
            this.setState({ liked: false })
        } else {
            this.setState({ liked: true })
        }

    }

    cansel() {

        this.setState({
            edit: false,
            text: this.last_edited_text,
        });
    }

    open() {
        if (!this.state.edit)
            alert(this.state.id);
    }



    render() {

        let content_text = this.state.text;

        if (this.state.edit === true) {
            content_text = <textarea className='text-input' value={this.state.text} onChange={e => this.setState({ text: e.target.value })} />
        }
        return (
            <div className="comment-box">
                <div className="comment-head">
                    <h6 className="comment-name by-author"><a href={this.state.writer.address}>{this.state.name}</a>
                    </h6>
                    <span>{this.state.date}</span>
                    {this.state.isReply === true ? null :
                        <i className='reply blue icon'></i>
                    }

                    <div className='like-pack'>
                        <button className="mini-item" onClick={this.like.bind(this)}>
                            <i className={'heart' + `${this.state.liked === true ? '' : ' outline'}` + ' icon red'}></i>
                        </button>
                        liked by {' ' + this.state.like_count}
                    </div>

                    {this.state.can_edit === true ?
                        <div>

                            {this.state.edit === true ?
                                null :
                                < button className="edit outline green icon mini-item" onClick={this.edit_text.bind(this)}>< i className="edit outline green icon" ></i></button>
                            }
                            <button className='trash icon mini-item' onClick={this.trash.bind(this)}><i className='trash icon'></i></button>
                        </div>
                        :
                        null
                    }

                    {this.state.edit === true ?
                        <div className="edit-items-buttons">
                            <button className="ui mini red button edit-items-buttons" onClick={this.cansel.bind(this)}>Cansel</button>
                            <button className="ui mini green button edit-items-buttons" onClick={this.submit.bind(this)}>Apply</button>
                        </div>
                        :
                        null
                    }

                </div>
                <div className="comment-content" onClick={this.open.bind(this)}>
                    {/* <FroalaComment content={this.state.content} id={this.state.id} /> */}
                    {content_text}
                </div>

            </div>
        )
    }
}

export default CommentBox
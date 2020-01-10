import React from 'react'
import CommentList from './CommentList';
import './style.css'
class CommentManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments,
            title: props.title,
        };
    }


    render() {

        return (

            <div className="comments-container">
                
                {/* importing froala */}
                <link href="node_modules/froala-editor/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
                <script type="text/javascript" src="node_modules/froala-editor/js/froala_editor.pkgd.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/froala-editor@3.0.6/css/froala_editor.pkgd.min.css" rel="stylesheet"
                    type="text/css" />
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/froala-editor@3.0.6/js/froala_editor.pkgd.min.js"></script>
                <link href="../css/froala_style.min.css" rel="stylesheet" type="text/css" />

                <h1>
                    {this.state.title}
                </h1>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentManager
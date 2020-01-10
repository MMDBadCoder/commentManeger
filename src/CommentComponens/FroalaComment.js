import React from 'react'


class FroalaComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            edit: false,
            content: props.content,
        }
    }


    render() {

        return (
            <div>

                <button onclick="edit()">edit</button>
                <button onclick="submit()">submit</button>

                <h3 id = {this.state.id}>
                    {this.state.content}
                </h3>
                
            </div>

        )
    }
}








export default FroalaComment






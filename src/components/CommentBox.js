import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, fetchComments } from "../actions";

class CommentBox extends Component {
    state = { comment: ''  };

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addComment(this.state.comment);

        this.setState({ comment: "" })
    };

    render() {
        return (
        <div>
            <h2>Add a comments</h2>
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>

            <button className="fetch-btn" onClick={this.props.fetchComments}>Fetch comment</button>
        </div>
        )
    }
}

export default connect(null, {addComment, fetchComments})(CommentBox);
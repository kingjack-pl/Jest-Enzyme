import React from "react";
import { connect } from "react-redux";

const CommentList = ({comments}) => {

    if(comments.length === 0) {
        return null;
    }

    return (
        <ul>
            { comments.map((comment => <li key={ comment }>{ comment }</li> ))}
        </ul>
    )
};

const mapStateToProps = ({ comments }) => ({
    comments
});

export default connect(mapStateToProps)(CommentList);

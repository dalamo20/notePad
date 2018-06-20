import React from "react";

const TodoItem = props => (
    <div className="row">
        <div className="col-1">
            Check
        </div>
        <div className="col-10">
            <div className="row">
                Todo
            </div>
            <div className="row">
                Deadline
            </div>
            <div className="col-1">
                Note
            </div>
        </div>
    </div>
        )
export default TodoItem;
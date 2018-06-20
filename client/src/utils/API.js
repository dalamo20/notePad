import axios from "axios";

export default {
    //GET todos from /api/todos route on our Express server
    getTodos: function() {
        return axios.get("/api/todos");
    },
    //Create a todo by making a POST request to /api/todo on Express server
    createNewTodo: function (newTodo) {
        return axios.post("/api/todo", newTodo);
    }
};
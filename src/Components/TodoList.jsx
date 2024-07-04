import { Divider, List, Paper } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ data, deleteTodo, editTodo, toggleTodo }) {

    

  if (data.length > 0) {
    return (
      <>
        <Paper>
          {data.map((el, index) => (
            <List key={el.id}>
              <>
                <TodoItem
                  key={el.id}
                  id={el.id}
                  task={el.task}
                  completed={el.completed}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleTodo={toggleTodo}
                />
                {index < data.length - 1 && <Divider />}
              </>
            </List>
          ))}
        </Paper>
      </>
    );
  } else {
    <Paper>
      <List>No Items in the List</List>
    </Paper>;
  }
}

export default TodoList;

import { DeleteForeverOutlined, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
import EditForm from "./EditForm";
import useToggle from "../Hooks/useToggle";

function TodoItem({ id, task, completed, deleteTodo, editTodo, toggleTodo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <>
      <ListItem key={id}>
        {isEditing ? (
          <EditForm
            id={id}
            task={task}
            completed={completed}
            editTodo={editTodo}
            toggleIsEditing={toggleIsEditing}
          />
        ) : (
          <>
            <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText
              style={{ textDecorationLine: completed ? "line-through" : "" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteTodo(id)}>
                <DeleteForeverOutlined />
              </IconButton>
              <IconButton onClick={toggleIsEditing}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
}

export default TodoItem;

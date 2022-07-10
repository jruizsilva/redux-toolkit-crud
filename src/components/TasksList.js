import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (idTask) => {
    dispatch(deleteTask(idTask));
  };

  return (
    <div>
      <header>
        <h2>Tasks {tasks.length}</h2>
        <Link to="/create-task">Create task</Link>
      </header>
      {tasks.map((task) => (
        <div key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit task</Link>
        </div>
      ))}
    </div>
  );
}

export default TasksList;

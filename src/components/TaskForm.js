import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../redux/features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams, Link } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === params.id);
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [params.id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <input type="submit" />
      </form>
    </>
  );
}

export default TaskForm;

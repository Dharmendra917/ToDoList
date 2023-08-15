import { toast } from "react-toastify";
import React from "react";

const Create = (props) => {
  const {
    tasks,
    setTask,
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    activeTask,
    setActiveTask,
  } = props;
  // to sumbit data on a new task varibale
  const submitHandler = (event) => {
    event.preventDefault();
    // Validation
    if (title.length < 5 || description.length < 5) {
      toast.error(
        "Title and Description must be more than 5 and 20 Character respectively"
      );
      return;
    }

    const data = {
      title,
      description,
      status,
      date: new Date().toLocaleDateString(),
    };
    setTask([...tasks, data]);
    setTitle("");
    setDescription("");
    setStatus("Due");
  };
  // tiis is used for update task in todo list
  const updateTask = (e) => {
    e.preventDefault();
    const copyTask = [...tasks];
    copyTask[activeTask] = {
      ...copyTask[activeTask],
      title,
      description,
      status,
    };
    setTask(copyTask);
    setActiveTask(null);
    setTitle("");
    setDescription("");
    setStatus("Due");
  };

  return (
    <div>
      <form className="w-50">
        <h2>Create Your Tasks</h2>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          placeholder="description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          className="form-control mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="due">Due</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {activeTask === null ? (
          <button className="btn btn-primary m-1" onClick={submitHandler}>
            Create Task
          </button>
        ) : (
          <button className="btn btn-primary m-1" onClick={updateTask}>
            Update Task
          </button>
        )}

        <hr />
      </form>
    </div>
  );
};

export default Create;

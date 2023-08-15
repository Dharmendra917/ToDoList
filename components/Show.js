import React from "react";

const Show = (props) => {
  const {
    tasks,
    setTask,
    setTitle,
    setDescription,
    setStatus,
    setActiveTask,
    title,
  } = props;

  const updateHandler = (index) => {
    console.log(index);
    const { title, description, status } = tasks[index];
    setTitle(title);
    setDescription(description);
    setStatus(status);
    setActiveTask(index);
  };

  const deleteHandler = (index) => {
    // const cpyTask = [...tasks];
    // cpyTask.splice([index], 1);
    // setTask(cpyTask);
    // // console.log(tasks);
    setTask(tasks.filter((t, i) => i !== index));
  };

  let tasklist = <h2>loading...</h2>;

  if (tasks.length > 0) {
    tasklist = tasks.map((elm, index) => {
      return (
        <div key={index} className="card  mb-3 me-3" style={{ width: "18rem" }}>
          <h6></h6>
          <div className="card-body">
            <h5 className="card-title">{elm.title}</h5>{" "}
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {elm.status}
            </h6>
            <p className="card-text">{elm.description}</p>
            <button
              className="me-2 btn btn-sm   btn-dark"
              onClick={() => updateHandler(index)}
            >
              Update Task
            </button>
            <button
              className="btn btn-sm btn-dark"
              onClick={() => deleteHandler(index)}
            >
              Delete Task
            </button>
          </div>
          <span
            className=" "
            style={{ textAlign: "end", padding: "2px", fontSize: "13px" }}
          >
            {elm.date}
          </span>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="c-parent d-flex flex-wrap">{tasklist}</div>
    </div>
  );
};

export default Show;

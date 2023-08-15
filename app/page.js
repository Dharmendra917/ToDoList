"use client";

import React, { useState } from "react";
import Show from "@/components/Show";
import Create from "@/components/Create";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Due");
  const [tasks, setTask] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  return (
    <div className="mt-5 container p-5">
      <hr />
      <Create
        title={title}
        setTitle={setTitle}
        tasks={tasks}
        setTask={setTask}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        activeTask={activeTask}
        setActiveTask={setActiveTask}
      />

      <div className="d-flex flex-wrap"></div>
      <h2>pending tasks</h2>
      <Show
        tasks={tasks}
        setTask={setTask}
        setDescription={setDescription}
        setTitle={setTitle}
        setStatus={setStatus}
        setActiveTask={setActiveTask}
      />
    </div>
  );
};

export default page;

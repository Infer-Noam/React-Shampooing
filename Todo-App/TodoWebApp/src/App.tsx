import { useState } from "react";
import "./App.css";
import TaskGrid from "./components/TaskGrid/TaskGrid";
import type { Task } from "./components/TaskItem/TaskType";

const prePresentTasks = [
  {
    id: 0,
    name: "Do me!!!",
  },
  {
    id: 1,
    name: "Do me now!!!",
  },
  {
    id: 2,
    name: "Do sssssss!",
  },
  {
    id: 3,
    name: "Do mgggggggg!",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(prePresentTasks);

  return (
    <>
      <TaskGrid tasks={tasks} />
    </>
  );
}

export default App;

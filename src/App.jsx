import { useState, useRef } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskIdRef = useRef(1);

  const addTask = (taskText) => {
    const newTask = {
      id: taskIdRef.current,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    taskIdRef.current += 1;
  };

  return (
    <div>
      <Header addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default App;

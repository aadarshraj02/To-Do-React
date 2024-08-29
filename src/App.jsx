import { useState, useRef } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskIdRef = useRef(1);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const addTask = (taskText) => {
    const capitalizeText = capitalize(taskText);
    const newTask = {
      id: taskIdRef.current,
      text: capitalizeText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    taskIdRef.current += 1;
  };

  return (
    <div>
      <Navbar />
      <Header addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default App;

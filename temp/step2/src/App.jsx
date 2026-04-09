import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Workout session",
      completed: false,
    },
    {
      title: "Study React",
      description: "Learn React components",
      completed: true,
    },
  ]);
  function addtodo(){
    setTodos([...todos,{
      title:"New",
      description:"new desc"
    }])
  }

  return (
    <div>
    <button onClick={addtodo}>Add ne todo</button>
      {todos.map((item, index) => (
        <Todo
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;

import { useState }  from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  
  const onChange  = (event) => {
    setToDo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault () ;
    if (toDo === "") {
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      {
        toDos.map((toDo, index) => (
          <h3>{index + 1}. {toDo}</h3>
        ))
      }
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write youre to do..." />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;

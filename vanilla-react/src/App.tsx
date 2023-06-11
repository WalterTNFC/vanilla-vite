import { useState } from 'react'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  // console.log(text);
  function onAdd () {
    console.log('text', text);
    console.log('todos', todos);
    if (!todos.includes(text)) {
      setTodos([...todos, text]);
      setText('');
    } else {
      setText('');
      alert('Elemento já listado!');
    }
  }

  function removeItem(itemToRemove:string) {
    setTodos(todos.filter((todo) => todo !== itemToRemove));
  }

  return (
  <div className="container">
    <p>
      <label>Add Item</label>
      <input
        id="new-text"
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button onClick={onAdd}> Add (+)</button>
    </p>
    <h3>Todo</h3>
    
    <div id="todos">
      {todos.map(todo => (
        <div>
          <input type="checkbox"/>
          <label>{todo}</label>
          <button onClick={() => removeItem(todo)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default App

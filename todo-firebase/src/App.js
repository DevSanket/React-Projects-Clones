import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase.utils';
import firebase from 'firebase';


function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');  



  //using useEffect we are adding data from firebase to setTodos
  useEffect(() => {
      db.collection('todos').orderBy("timestamp","desc").onSnapshot(
        snapshot => {
          console.log(snapshot);
          setTodos(snapshot.docs.map(doc => ({
            id:doc.id,
            todo:doc.data().todo,
            timestamp:doc.data().timestamp
          })))
        }
      )
  },[])

// console.log(todos);
  // function for add TOdo in database
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // after value added setInput value we be empty
    setInput('');
  }


  return (
    <div className="App">
     <div className="card">
     <h1>TODO APP</h1>
      <form className="input-group mb-3">
      <input type="text" className="form-control" onChange={e => setInput(e.target.value)} value={input}/>
      <button 
      disabled={!input}
      type="submit" className="btn btn-primary" onClick={addTodo}>Add Todo</button>
      </form>
       </div>
       <div className="card">
       <table className="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">TODO</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    
      {
        todos.map(todo => {
          return <tr key={todo.id}>
            <th>{todo.id}</th>
            <th>{todo.todo}</th>
            <th><button className="btn btn-success"
            onClick={() =>  {
              db.collection('todos').doc(todo.id).set(
                {
                  todo:input,
                },
                {
                  merge:true
                }
              );
              setInput('')
            }}
            disabled={!input}
            >Update</button></th>
            <th><button className="btn btn-danger"
            onClick={(e) => db.collection('todos').doc(todo.id).delete()}
            >Delete</button></th>
            </tr>
        })
      }
    
  </tbody>
</table>
       </div>  


    </div>
  );
}

export default App;

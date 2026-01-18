import { useState } from 'react'

// counter first stage without usestate
// const App = () => {
//   let num = 0
//   const addCounter = () => {
//     num += 1
//     console.log(num);
//   }
//   const lessCounter = () => {
//     num -= 1
//     console.log(num);
//   }
//   return (
//     <>
//     <h1> Counter {num}</h1>
//     <button onClick={addCounter}>+</button>
//     <button onClick={lessCounter}>-</button>
//     </>
//   )
// }


export default App


// counter second stage with usestate
// const App = () => {
  
//   const [num , setNum] = useState(0)
//   const addCounter = () => {
//     setNum(num + 1)
//     // console.log(num);
//   }
//   const lessCounter = () => {
//     setNum(num - 1)
//     // console.log(num);
//   }
//   return (
//     <>
//     <h1> Counter {num}</h1>
//     <button onClick={addCounter}>+</button>
//     <button onClick={lessCounter}>-</button>
//     <hr/>

//     </>
//   )
// }


//================================
// -------------------------------ToDo App 
//================================

// ToDo App stage 1

// const todoApp = () => {
//   return (
//     <>
//     <h1>To Do App</h1>
//     <form >
//       <input type="text" placeholder="Enter the Title" />
//       <input type="text" placeholder="Enter the Description" />
//       <button>Add Todo</button>
//     </form>
//     </>
//   )
// }

// export default todoApp


// ================================================================================
// ------------------------ToDo App stage 2 with conditional rendering and usestate
//================================================================================


// function todoApp() {
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [todo, setTodo] = useState([]);

// const addTodo = (event) => {
//   event.preventDefault();
//   console.log(title, description);

//   todo.push({title, description});

//   setTodo([...todo]);
  
//   setTitle("");
//   setDescription("");
// };

//   return (
//     <>
//     <h1>To Do App</h1>
//     <form onSubmit={addTodo}>
//       <input
//       type="text" 
//       value={title} 
//       placeholder="Enter the Title" 
//       onChange={(e) => setTitle(e.target.value)} 
//       />
//       <input 
//       type="text" 
//       value={description} 
//       placeholder="Enter the Description" 
//       onChange={(e) => setDescription(e.target.value)} 
//       />

//       <button>Add Todo</button>
//     </form>

//     <div>
//       {todo.length > 0 ? todo.map((item, index) => {
//         return <div className= "children" key={index}>
//         <h1>No: {index + 1}</h1>
//         <p>Title: {item.title}</p>
//         <p>Description: {item.description}</p>
//         <button>Edit Todo</button>
//         <button>Delete Todo</button>
//         </div>
//       }) : <h1>No To Do Found</h1>}
//     </div>
//     </>
//   )
// }
// export default todoApp



function todoApp() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [todo, setTodo] = useState([]);

const addTodo = (event) => {
  event.preventDefault();
  console.log(title, description);

  todo.push({title, description});

  setTodo([...todo]);
  
  setTitle("");
  setDescription("");
};

const deleteTodo = (index) => {
  todo.splice(index, 1);
  setTodo([...todo]);
};

const editTodo = (index) => {
  // console.log("edit todo", index);
  const title = prompt("Enter a new title");
  todo[index].title = title;

  const description = prompt("Enter a new description");
  todo[index].description = description;
  setTodo([...todo]);
};

  return (
    <>
    <h1>To Do App</h1>
    <form onSubmit={addTodo}>
      <input
      type="text" 
      value={title} 
      placeholder="Enter the Title" 
      onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
      type="text" 
      value={description} 
      placeholder="Enter the Description" 
      onChange={(e) => setDescription(e.target.value)} 
      />

      <button>Add Todo</button>
    </form>

    <div>
      {todo.length > 0 ? todo.map((item, index) => {
        return <div className= "children" key={index}>
        <h1>No: {index + 1}</h1>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
        <button onClick={() => editTodo(index)}>Edit Todo</button>
        <button onClick={() => deleteTodo(index)}>Delete Todo</button>
        </div>
      }) : <h1>No To Do Found</h1>}
    </div>
    </>
  )
}
export default todoApp
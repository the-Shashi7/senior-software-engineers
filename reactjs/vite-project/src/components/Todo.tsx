import React, { useCallback, useState } from "react";
import debounce from "../utils/debounce";
import useDebounce from "../hooks/useDebounce";

interface Todo {
    heading:String,
    content:String
}

const Todo = () => {
  const [todos, setTodos] = useState([{heading:"Kuch",content:"Karnan h"}]);
  const [currentTodo,setCurrentTodo] = useState("");

  const addTodoHandler = () => {
    const newArr = [...todos,{heading:currentTodo,content:"AA"}];
    setTodos(newArr)
    setCurrentTodo("")
  };

  const removeTodoHandler = (index:number) => {
    const newArr = [...todos];
    newArr.splice(index,1);
    setTodos(newArr);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setCurrentTodo(value);
    // debouncedChangeHandler();
    debouncedChange()
  }

  const debouncedChange = useDebounce(()=>{
    console.log("hello",new Date().getTime())
  }, 1000)

//   const debounce = (fun: Function, delay: number) => {
//     let timer: number;
//     return (...args: any[]) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fun(...args);
//         }, delay);
//     }
//   }

  const debouncedChangeHandler = useCallback(debounce(()=>{
    console.log("hello",new Date().getTime());
  }, 1000),[])

  return (
    <>
      <h1>Todo</h1>
      <div>
        { todos?.map((todo: Todo, index: number) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "red",
                  padding: "5px",
                  borderRadius: "5px",
                  minWidth: "200px",
                }}
              >
                <h3>{todo?.heading}</h3>
                <button
                  style={{
                    height: "40px",
                    width: "40px",
                    padding: "0px",
                    margin: "0px",
                  }}
                  onClick={() => removeTodoHandler(index)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "5px",
            minWidth: "200px",
          }}
        >
          <input 
            onChange={onChangeHandler}
            name="todo"
            value={currentTodo}
          />
          <button
            style={{
              height: "40px",
              padding: "0px 15px",
              margin: "0px",
            }}
            onClick={addTodoHandler}
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

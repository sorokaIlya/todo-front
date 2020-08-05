import React, {useState} from "react";
import {useStores} from "./App";
import ClickAwayListener from "react-click-away-listener";

interface forceTodo{
    todo: {
        id: string,
        task: string,
        performance: boolean
    }
}
const Item:React.FC<forceTodo>=({todo})=>{
    const [pick,setPick]=useState(false);
    const [value,setValue]=useState(todo.task)
    const {TodoEntity} = useStores()
    function changeTodo(){
        TodoEntity.toggleTodo({id:todo.id,task:value,performance:todo.performance})
        setPick(!pick)
    }
    return(
        <li className="todo-item">
            {pick ? <ClickAwayListener onClickAway={changeTodo}>
                     <input type="text" value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>
                     {if (e.key==="Enter" ||e.keyCode===27) changeTodo()}} />
                    </ClickAwayListener>
                :<div className={`todo-task ${todo.performance && 'fulfilled'}`}
                      onClick={()=>setPick(!pick)}>{value}
                </div>}

            <div className="buttons-editions">
            <button className="but-delete" onClick={()=>TodoEntity.deleteTodo(todo.id)}></button>
            <button className="but-cross " onClick={()=>TodoEntity.toggleTodo({task:todo.task,performance:!todo.performance,id:todo.id})}></button>
            </div>
            </li>
    )

}
export default Item
